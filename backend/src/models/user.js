'use strict';
const bcrypt = require('bcrypt');
const {SALT_ROUND, NAME_PATTERN} = require('../constants');


module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: NAME_PATTERN,
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: NAME_PATTERN,
            }
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        login: {
            type: DataTypes.STRING(16),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'passwordHash',
            set(value) {
                this.setDataValue("password", bcrypt.hashSync(value, bcrypt.genSaltSync(SALT_ROUND)));
            },
        },
        profilePicture: {
            type: DataTypes.STRING,
            allowNull: true,
        }

    }, {});
    User.associate = function (models) {
        User.hasMany(models.Task, {
            foreignKey: 'userId'
        });
    };
    return User;
};