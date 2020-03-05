const {User} = require('../models');
const Controller = require('../utils/Controller');

class UserController {
    constructor() {
        this.controller = new Controller(User);
    }

    createUser = async (req, res, next) => {
        try {
            const newUser = await this.controller.create(req.body);
            const userData = newUser.get();
            delete userData.password;
            res.send(userData);

        }
        catch (e) {
            next(e);
        }
    };
    updateUserById = async (req, res, next) => {
        try {
            const updatedUser = await this.controller.update(req.params.id, req.body);
            const data = updatedUser.get();
            delete data.password;
            return res.send(data);
        }
        catch (e) {
            next(e);
        }

    };
    getUserById = async (req, res, next) => {
        try {
            res.send(await this.controller.read(req.params.id, {
                attributes: {
                    exclude: ['password'],
                }
            }));
        }
        catch (e) {
            next(e);
        }
    };
    deleteUserById = async (req, res, next) => {
        try {
            res.send(`${await this.controller.delete(req.params.id)}`);
        }
        catch (e) {
            next(e);
        }
    };
}

module.exports = new UserController();