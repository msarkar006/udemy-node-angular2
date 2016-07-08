"use strict";
var message_1 = require("./message");
var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.addMessage = function (message) {
        this.messages.push(message);
        console.log(this.messages);
    };
    MessageService.prototype.getMessages = function () {
        return this.messages;
    };
    MessageService.prototype.editMessage = function (message) {
        this.messages[this.messages.indexOf(message)] = new message_1.Message('Edited', null, 'Bad ass');
    };
    MessageService.prototype.deleteMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    };
    return MessageService;
}());
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map