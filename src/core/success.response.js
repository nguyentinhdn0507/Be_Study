"use strict";

const StatusCode = {
  OK: 200,
  CREATED: 201,
};
const ReasonStatusCode = {
  CREATED: "Created !",
  OK: "Success",
};

class SuccessResponse {
  constructor({
    message,
    statusCode = StatusCode.OK,
    reasonStatusCode = ReasonStatusCode.OK,
    metadata = {},
  }) {
    this.message = !message ? reasonStatusCode : message;
    this.status = statusCode;
    this.metadata = metadata;
  }
  send(res, headers = {}) {
    return res.status(this.status).json(this);
  }
}

class OK extends SuccessResponse {
  constructor({ message, metadata }) {
    super({ message, metadata });
  }
}
class CREATED extends SuccessResponse {
  constructor({
    option = {},
    message,
    statusCode = StatusCode.CREATED,
    reasonStatuscode = ReasonStatusCode.CREATED,
    metadata,
  }) {
    super({ message, statusCode, reasonStatuscode, metadata });
    this.option = option;
  }
}
module.exports = {
  OK,
  CREATED,
};
