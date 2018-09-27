const express = require("express");
const router = express.Router({ mergeParams: true });

const {
    cretaeMessage,
    getMessage,
    deleteMessage
} = require("../handlers/messages");

router.route("/").post(cretaeMessage);

router
    .route("/:message-id")
    .get(getMessage)
    .delete(deleteMessage);

module.exports = router;