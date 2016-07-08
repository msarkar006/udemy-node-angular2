"use strict";
var Message = (function () {
    function Message(content, messageId, userName, userId) {
        this.content = content;
        this.messageId = messageId;
        this.userName = userName;
        this.userId = userId;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=Message.js.map