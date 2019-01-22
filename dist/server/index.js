"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _approutes = _interopRequireDefault(require("./routes/approutes"));

var _apiconfig = _interopRequireDefault(require("./config/apiconfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

_apiconfig.default.use(_approutes.default);

_apiconfig.default.listen(process.env.PORT, function (req, res) {
  console.log("server running on port ".concat(process.env.PORT));
});