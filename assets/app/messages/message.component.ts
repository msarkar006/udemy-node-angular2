import {Component, Input, EventEmitter, Output} from "angular2/core";
import {Message} from "./Message";
import {MessageService} from "./message.service";
import {ErrorService} from "../erros/error.service";
import {AuthService} from "../auth/auth.service";
@Component({
    selector: 'my-message',
    template: `
        <article class="panel panel-default" *ngIf="isLoggedIn()">
            <div class="panel-body">
                {{ message.content }}
            </div>                
            <footer class="panel-footer">
                <div class="author">
                    @{{ message.userName }}
                </div>
                <div class="config" *ngIf="belongsToUser()">
                    <a (click)="onEdit()">Edit</a>
                    <a (click)="onDelete()" >Delete</a>
                </div>
            </footer>
        </article>
    `,
    styles: [`
        .author{
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;        
        }
        .config{
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;      
        }
    `]
})


export class MessageComponent{
    @Input() message:Message;
    @Output() editClicked = new EventEmitter<string>();

    constructor(private _messageService: MessageService, private _errorService: ErrorService, private _authService: AuthService){}

    onEdit(){
        this._messageService.editMessage(this.message);
    }

    onDelete(){
        this._messageService.deleteMessage(this.message)
            .subscribe(
                data => console.log(data),
                error => this._errorService.handleError(error)
            );
    }

    belongsToUser(){
        return localStorage.getItem('userId') == this.message.userId;
    }

    isLoggedIn(){
        return this._authService.isLoggedIn();
    }
}