const AppError = require("../utils/AppError");


module.exports = (

    req,

    res,

    next

) => {


    const error =
        new AppError(
            "Route not found",
            404
        );


    next(error);

};
