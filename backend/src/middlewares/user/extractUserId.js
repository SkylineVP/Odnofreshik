const AppError = require('../../utils/application_errors');

module.exports = (req, res, next) => {
    try {
        req.userId = req.params.id || req.query.id || req.body.id;
        if (req.userId) {
            return next();
        }
        next(new AppError.BadRequestError());
    }
    catch (e) {
        next(e);
    }

};