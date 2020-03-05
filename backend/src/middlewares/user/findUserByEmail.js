const {User} = require('../../models');
const AppError = require('../../utils/application_errors');
module.exports = async (req, res, next) => {
    try {

        const user = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if (user) {
            req.user = user;
            return next();
        }
        return res.status(404).send(new AppError.NotFoundError());

    }
    catch (e) {
        next(e);
    }
};