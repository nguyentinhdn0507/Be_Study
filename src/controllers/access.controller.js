const AccessService = require("../services/access.service");
const { OK, CREATED } = require("../core/success.response");
class AccessController {
  singUp = async (req, res, next) => {
    new CREATED({
      message: "Register Successfully ",
      metadata: await AccessService.signUp(req.body),
      option: {
        limit: 10,
      },
    }).send(res);
  };
}
module.exports = new AccessController();
