const express = require("express");
const router = express.Router({ mergeParams: true });
const { loginRequired } = require("../middleware/auth");

const {
  getMessages,
  createMessage,
  getMessage,
  deleteMessage,
} = require("../handlers/messages");

router.route("/", loginRequired).get(getMessages);

router.route("/", loginRequired).post(createMessage);

router.route("/:message_id", loginRequired).get(getMessage).delete(deleteMessage);

module.exports = router;
