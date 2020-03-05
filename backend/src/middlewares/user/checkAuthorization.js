const AppError = require('../../utils/application_errors');
module.exports = async (req, res, next) => {
    try {
        if (req.headers.authorization) {
            req.authorizationData = {
                id: req.headers.authorization
            };
            return next();
        }
        res.status(401).send(new AppError.UnauthorizedError());
    }
    catch (e) {
        next(e)
    }
};