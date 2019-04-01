'use strict'
const setupDatabase = require('./lib/db')
const setupUserModel = require('./models/user.model')
const setupCountryModel = require('./models/country.model')
const setupInvoceModel =require('./models/invoice.model')
const setupInvoce_DetailModel = require('./models/invoice_detail.model')
const setupServicesModel = require('./models/services.models')
// const setupAgent = require('./lib/agent')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const UserModel = setupUserModel(config)
  const CountryModel = setupCountryModel(config)

  CountryModel.hasMany(UserModel)
  UserModel.belongsTo(CountryModel)
  

    const Invoice_DetailModel = setupInvoice_DetailModel(config)
    const InvoceModel= setupInvoceModel(config)

    InvoceModel.hasMany(InvoceModel)
    Invoce_DetailModel.belongsTo(Invoce_DetailModel)


 const Invoice_DetailModel = setupInvoice_DetailModel(config)
   const ServicesModel = setupServicesModel(config)

    ServicesModel.hasMany(ServicesModel)
    Invoce_DetailModel.belongsTo(Invoce_DetailModel)


    const InvoiceModel = setupInvoiceModel(config)
    const UserModel = setupUserModel(config)

    UserModel.hasMany(UserModel)
    InvoceModel.belongsTo(InvoceModel)

    
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
