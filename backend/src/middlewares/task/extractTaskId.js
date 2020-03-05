module.exports = (req, res, next) => {
    try {
        req.taskId = req.params.id || req.query.id || req.body.id;
        if (req.taskId) {
            return next();
        }
        next(new Error());
    }
    catch (e) {
        next(e);
    }

};