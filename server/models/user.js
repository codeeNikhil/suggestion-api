'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        search_frequency:DataTypes.INTEGER
        
    }, {});
    User.associate = function(models) {
    };
    return User;
};