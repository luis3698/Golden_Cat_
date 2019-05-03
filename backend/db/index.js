"use strict"
// config
const { db:config } = require('@golden-cat/config')
//controladores
const setupUser = require('./lib/users')
const setupRoom = require('./lib/rooms')
const setupType_room = require('./lib/type_room')

const setupRate = require('./lib/rate')
const setupSeason = require('./lib/season')
//modelos
const setupDatabase = require("./lib/db")
const setupUserModel = require("./models/user.model")
const setupCountryModel = require("./models/country.model")
const setupInvoiceModel = require("./models/invoice.model")
const setupInvoice_DetailModel = require("./models/invoice_detail.model")
const setupServicesModel = require("./models/services.models")
const setupCityModel = require("./models/city.model")
const setupRoomModel = require("./models/room.model")
const setupType_RoomModel = require("./models/type_room.model")
const setupRateModel = require("./models/rate.model")
const setupSeasonModel = require("./models/season.model")
const setupDepartmentsModel = require("./models/departments.model")
const setupSeason_DateModel = require("./models/season_date.model")
const setupReservationModel = require("./models/reservation.model")
const setupDetail_ReservationModel = require("./models/detail_reservation.model")

module.exports = async function() {
  const sequelize = setupDatabase(config)
  const UserModel = setupUserModel(config)
  const CountryModel = setupCountryModel(config)
  const RateModel = setupRateModel(config)
  const RoomModel = setupRoomModel(config)
  const Invoice_DetailModel = setupInvoice_DetailModel(config)
  const InvoiceModel = setupInvoiceModel(config)
  const ServicesModel = setupServicesModel(config)
  const ReservationModel = setupReservationModel(config)
  const Detail_ReservationModel = setupDetail_ReservationModel(config)
  const CityModel = setupCityModel(config)
  const DepartmentsModel = setupDepartmentsModel(config)
  const Type_RoomModel = setupType_RoomModel(config)
  const Season_DateModel = setupSeason_DateModel(config)
  const SeasonModel = setupSeasonModel(config)
  
  
  CountryModel.hasMany(UserModel)
  UserModel.belongsTo(CountryModel)

  InvoiceModel.hasMany(Invoice_DetailModel)
  Invoice_DetailModel.belongsTo(InvoiceModel)

  ServicesModel.hasMany(Invoice_DetailModel)
  Invoice_DetailModel.belongsTo(ServicesModel)

  UserModel.hasMany(InvoiceModel)
  InvoiceModel.belongsTo(UserModel)

  ReservationModel.hasMany(InvoiceModel)
  InvoiceModel.belongsTo(ReservationModel)

  Detail_ReservationModel.hasMany(ReservationModel)
  ReservationModel.belongsTo(Detail_ReservationModel)

  RoomModel.hasMany(Detail_ReservationModel)
  Detail_ReservationModel.belongsTo(RoomModel)


  DepartmentsModel.hasMany(CityModel)
  CityModel.belongsTo(DepartmentsModel)

  CountryModel.hasMany(DepartmentsModel)
  DepartmentsModel.belongsTo(CountryModel)

  RoomModel.hasMany(ServicesModel)
  ServicesModel.belongsTo(RoomModel)


  RoomModel.hasMany(Type_RoomModel)
  Type_RoomModel.belongsTo(RoomModel)


  SeasonModel.hasMany(Season_DateModel)
  Season_DateModel.belongsTo(SeasonModel)


  SeasonModel.hasMany(RateModel)
  RateModel.belongsTo(SeasonModel)


  RoomModel.hasMany(RateModel)
  RateModel.belongsTo(RoomModel)
  await sequelize.authenticate()

  const User = setupUser(UserModel)
  const Room = setupRoom(RoomModel)
  const Type_Room = setupType_room(Type_RoomModel)


  const Rate = setupRate(RateModel)
  const Season = setupSeason(SeasonModel)
  return {
    async setup() {
      await sequelize.sync({ force: true })
    },
    User,
    Room,
    Type_Room,
    Rate,
    Season
  }
}
