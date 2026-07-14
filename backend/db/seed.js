'use strict'

const { password } = require('@golden-cat/utils')

// Devuelve el nombre real de la clave foránea generada por Sequelize
// para una asociación belongsTo (evita depender de convenciones de nombres).
function fk (model, assocKey) {
  const assoc = model.associations[assocKey]
  if (!assoc) throw new Error(`Asociación '${assocKey}' no encontrada en ${model.name}`)
  return assoc.foreignKey
}

// Inserta datos de ejemplo coherentes para que la aplicación sea
// completamente funcional desde el primer arranque.
module.exports = async function seed (services) {
  const { models } = services
  const {
    CountryModel, DepartmentsModel, CityModel, UserModel,
    Type_RoomModel, RoomModel, ServicesModel, SeasonModel,
    Season_DateModel, RateModel
  } = models

  // --- País / Departamento / Ciudad ---
  const colombia = await CountryModel.create({ name: 'Colombia', code: 'CO' })
  const antioquia = await DepartmentsModel.create({
    code: 'ANT', name: 'Antioquia', [fk(DepartmentsModel, 'country')]: colombia.id
  })
  await CityModel.create({
    code: 'MDE', name: 'Medellín', [fk(CityModel, 'department')]: antioquia.id
  })

  // --- Usuarios ---
  await UserModel.create({
    typeUser: 'administrador',
    name: 'Administrador',
    lastName: 'Golden Cat',
    email: 'admin@goldencat.com',
    phone: '3000000000',
    identification: '10000000',
    password: password.generateHash('admin123'),
    [fk(UserModel, 'country')]: colombia.id
  })
  await UserModel.create({
    typeUser: 'cliente',
    name: 'Cliente',
    lastName: 'Demo',
    email: 'cliente@goldencat.com',
    phone: '3011111111',
    identification: '20000000',
    password: password.generateHash('cliente123'),
    [fk(UserModel, 'country')]: colombia.id
  })

  // --- Tipos de habitación ---
  const tipos = {}
  for (const name of ['individual', 'doble', 'suite', 'matrimonial']) {
    tipos[name] = await Type_RoomModel.create({ name })
  }

  // --- Habitaciones ---
  const roomFkType = fk(RoomModel, 'type_room')
  const rooms = [
    { code: '101', number_max: 1, number_max_precio_base: 1, value_base: 90000, value_persona: 30000, tipo: 'individual' },
    { code: '102', number_max: 2, number_max_precio_base: 2, value_base: 140000, value_persona: 35000, tipo: 'doble' },
    { code: '201', number_max: 2, number_max_precio_base: 2, value_base: 180000, value_persona: 40000, tipo: 'matrimonial' },
    { code: '301', number_max: 4, number_max_precio_base: 2, value_base: 320000, value_persona: 50000, tipo: 'suite' }
  ]
  const createdRooms = []
  for (const r of rooms) {
    const room = await RoomModel.create({
      code: r.code,
      state: 'Disponible',
      number_max: r.number_max,
      number_max_precio_base: r.number_max_precio_base,
      value_base: r.value_base,
      value_persona: r.value_persona,
      images: [],
      [roomFkType]: tipos[r.tipo].id
    })
    createdRooms.push(room)
  }

  // --- Servicios del hotel ---
  const servicios = [
    { name: 'Restaurante', description: 'Gastronomía local e internacional.', pressure: 'Incluido' },
    { name: 'Bar', description: 'Cócteles de autor y carta de vinos.', pressure: 'Opcional' },
    { name: 'Spa', description: 'Masajes y tratamientos de relajación.', pressure: 'Opcional' },
    { name: 'Gimnasio', description: 'Equipamiento cardiovascular y de fuerza.', pressure: 'Incluido' },
    { name: 'Piscina', description: 'Piscina climatizada con zona de descanso.', pressure: 'Incluido' },
    { name: 'Zonas verdes', description: 'Jardines y áreas al aire libre.', pressure: 'Incluido' }
  ]
  for (const s of servicios) await ServicesModel.create(s)

  // --- Temporadas, fechas y tarifas ---
  const temporadaAlta = await SeasonModel.create({ type: 'alta', percentage: 20, variation: 'Incrementa' })
  await SeasonModel.create({ type: 'baja', percentage: 10, variation: 'Decrementa' })

  await Season_DateModel.create({
    date_arrival: new Date(new Date().getFullYear(), 11, 15),
    date_exit: new Date(new Date().getFullYear() + 1, 0, 15),
    [fk(Season_DateModel, 'season')]: temporadaAlta.id
  })

  const rateFkSeason = fk(RateModel, 'season')
  const rateFkRoom = fk(RateModel, 'room')
  for (const room of createdRooms) {
    await RateModel.create({
      value_persona: Math.round(room.value_persona * 1.2),
      [rateFkSeason]: temporadaAlta.id,
      [rateFkRoom]: room.id
    })
  }

  return {
    countries: 1,
    users: 2,
    typeRooms: Object.keys(tipos).length,
    rooms: createdRooms.length,
    services: servicios.length,
    seasons: 2
  }
}
