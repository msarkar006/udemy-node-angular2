import {Component} from "angular2/core";
import {MessageListComponent} from "./message.list.component";
import {InputComponent} from "./message.input.component";

@Component({
    selector: 'my-messages',
    template: `
        <div class="row spacing">
            <my-message-input></my-message-input>
        </div>
        <div class="row spacing">
            <my-list-component></my-list-component>     
        </div>
    `,
    directives: [MessageListComponent, InputComponent ]
})
export class MessagesComponent{

}