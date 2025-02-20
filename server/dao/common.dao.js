
const model = require('../models')
const sequelize=require('sequelize');
const Op=sequelize.Op




module.exports.createUsers = async (data) => {
    try {
        return await model.User.bulkCreate(data)

    } catch (error) {
        throw error
    }

}
module.exports.findUser = async (condition) => {
    try {

        return await model.User.findOne({ where: { ...condition } });

    } catch (error) {
        throw error
    }

}
module.exports.updateUser = async (data,condition) => {
    try {

        return await model.User.update(data,{ where: { ...condition } });

    } catch (error) {
        throw error
    }

}
module.exports.findUserSuggestions = async (key, limit = 100) => {
    try {

        return await model.User.findAll({
            attributes:['id','name'],
            where: { name: { [Op.like]: `${key}%` } },
            order: [['search_frequency', 'DESC']],
            limit: parseInt(limit)
        })

    } catch (error) {
        throw error
    }

}