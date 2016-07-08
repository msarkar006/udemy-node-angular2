"use strict";
///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
var browser_1 = require('angular2/platform/browser');
var app_component_1 = require("./app.component");
var message_service_1 = require("./messages/message.service");
browser_1.bootstrap(app_component_1.AppComponent, [message_service_1.MessageService]);
//# sourceMappingURL=boot.js.map