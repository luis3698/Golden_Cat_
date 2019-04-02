"use strict";
const setupDatabase = require("./lib/db");
const setupUserModel = require("./models/user.model");
const setupCountryModel = require("./models/country.model");
const setupInvoiceModel = require("./models/invoice.model");
const setupInvoice_DetailModel = require("./models/invoice_detail.model");
const setupServicesModel = require("./models/services.models");
const setupCityModel = require("./models/city.model");
const setupRoomModel = require("./models/room.model");
const setupType_RoomModel = require("./models/type_room.model");
const setupRateModel = require("./models/rate.model");
const setupSeasonModel = require("./models/season.model");
const setupDepartmentsModel = require("./models/departments.model");
const setupSeason_DateModel = require("./models/season_date.model");
const setupReservationModel = require("./models/reservation.model");
const setupDetail_ReservationModel = require("./models/detail_reservation.model");
// const setupAgent = require('./lib/agent')

module.exports = async function(config) {
  const sequelize = setupDatabase(config);
  const UserModel = setupUserModel(config);
  const CountryModel = setupCountryModel(config);

  CountryModel.hasMany(UserModel);
  UserModel.belongsTo(CountryModel);

  const Invoice_DetailModel = setupInvoice_DetailModel(config);
  const InvoiceModel = setupInvoiceModel(config);

  InvoiceModel.hasMany(InvoiceModel);
  Invoice_DetailModel.belongsTo(Invoice_DetailModel);

  const Invoice_DetailModel = setupInvoice_DetailModel(config);
  const ServicesModel = setupServicesModel(config);

  ServicesModel.hasMany(ServicesModel);
  Invoce_DetailModel.belongsTo(Invoice_DetailModel);

  const InvoiceModel = setupInvoiceModel(config);
  const UserModel = setupUserModel(config);

  UserModel.hasMany(UserModel);
  InvoiceModel.belongsTo(InvoiceModel);

  const InvoiceModel = setupInvoiceModel(config);
  const ReservationModel = setupReservationModel(config);

  ReservationModel.hasMany(ReservationModel);
  InvoiceModel.belongsTo(InvoiceModel);

  const ReservationModel = setupSeasonModel(config);
  const Detail_ReservationModel = setupReservationModel(config);

  Detail_ReservationModel.hasMany(Detail_ReservationModel);
  ReservationModel.belongsTo(ReservationModel);

  const Detail_ReservationModel = setupDetail_ReservationModel(config);
  const RoomModel = setupRoomModel(config);

  RoomModel.hasMany(RoomModel);
  Detail_ReservationModel.belongsTo(Detail_ReservationModel);

  const CityModel = setupCityModel(config);
  const DepartmentsModel = setupDepartamentsModel(config);

  DepartmentsModel.hasMany(DepartamentsModel);
  CityModel.belongsTo(CityModel);

  const DepartmentsModel = setupDepartmentsModel(config);
  const CountryModel = setupRoomModel(config);

  CountryModel.hasMany(CountryModel);
  DepartmentsModel.belongsTo(DepartmentsModel);

  const ServicesModel = setupServicesModel(config);
  const RoomModel = setupRoomModel(config);

  RoomModel.hasMany(RoomModel);
  ServicesModel.belongsTo(ServicesModel);

  const Type_RoomModel = setupType_RoomModel(config);
  const RoomModel = setupRoomModel(config);

  RoomModel.hasMany(RoomModel);
  Type_RoomModel.belongsTo(Type_RoomModel);

  const Season_DateModel = setupSeason_DateModel(config);
  const SeasonModel = setupSeasonModel(config);

  SeasonModel.hasMany(SeasonModel);
  Season_DateModel.belongsTo(Season_DateModel);

  const RateModel = setupRateModel(config);
  const SeasonModel = setupSeasonModel(config);

  SeasonModel.hasMany(SeasonModel);
  RateModel.belongsTo(RateModel);

  const RateModel = setupRateModel(config);
  const RoomModel = setupRoomModel(config);

  RoomModel.hasMany(RoomModel);
  RateModel.belongsTo(RateModel);
  await sequelize.authenticate();

  if (config.setup) {
    await sequelize.sync({ force: true });
  }

  const Agent = {};
  const Metric = {};

  return {
    Agent,
    Metric
  };
};


