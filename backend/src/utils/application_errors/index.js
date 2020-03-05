const path = require('path');
const fs = require('fs');
const basename = path.basename(__filename);

const errors = {};

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(async file => {
        try {
            const errorClass = (await import (path.join(__dirname, file))).default;

            errors[errorClass.name] = errorClass;
        }
        catch (e) {

        }

    });

module.exports = errors;