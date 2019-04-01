'use strict'
const setupDatabase = require('./lib/db')
const setupUserModel = require('./models/user.model')
const setupCountryModel = require('./models/country.model')
const setupInvoiceModel =require('./models/invoice.model')
const setupInvoice_DetailModel = require('./models/invoice_detail.model')
const setupServicesModel = require('./models/services.models')
const setupCityModel = require('./models/city.model')
const setupRoomModel = require('./models/room.model')
const setupType_RoomModel = require('./models/type_room.model')
const setupRateModel = require('./models/rate.model')
const setupSeasonModel = require('./models/season.model')
const setupDepartmentsModel = require('./models/departments.model')
const setupSeason_DateModel = require('./models/season_date.model')
const setupReservationModel = require('./models/reservation.model')
const setupDetail_ReservationModel = require('./models/detail_reservation.model')


// const setupAgent = require('./lib/agent')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const UserModel = setupUserModel(config)
  const CountryModel = setupCountryModel(config)

  CountryModel.hasMany(UserModel)
  UserModel.belongsTo(CountryModel)
  

    const Invoice_DetailModel = setupInvoice_DetailModel(config)
    const InvoiceModel= setupInvoiceModel(config)

    InvoiceModel.hasMany(InvoiceModel)
    Invoice_DetailModel.belongsTo(Invoice_DetailModel)


   const Invoice_DetailModel = setupInvoice_DetailModel(config)
   const ServicesModel = setupServicesModel(config)

   ServicesModel.hasMany(ServicesModel)
   Invoce_DetailModel.belongsTo(Invoice_DetailModel)


    const InvoiceModel = setupInvoiceModel(config)
    const UserModel = setupUserModel(config)

    UserModel.hasMany(UserModel)
    InvoiceModel.belongsTo(InvoiceModel)


  const SeasonModel = setupSeasonModel(config)
  const ReservationModel = setupReservationModel(config)

  ReservationModel.hasMany(ReservationModel)
  SeasonModel.belongsTo(SeasonModel)


  const ReservationModel = setupSeasonModel(config)
  const Detail_ReservationModel = setupReservationModel(config)

  Detail_ReservationModelModel.hasMany(Detail_ReservationModelModel)
  ReservationModel.belongsTo(ReservationModel)
  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Agent = {}
  const Metric = {}

  return {
    Agent,
    Metric
  }
}
