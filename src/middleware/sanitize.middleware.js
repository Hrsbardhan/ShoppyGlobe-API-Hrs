const sanitize = require("express-mongo-sanitize");


module.exports = sanitize({

    replaceWith: "_"

});
