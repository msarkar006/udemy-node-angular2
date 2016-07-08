import {Component, OnInit} from 'angular2/core';
import {Message} from "./message";
import {MessageService} from "./message.service";
import {ErrorService} from "../erros/error.service";
import {AuthService} from "../auth/auth.service";
@Component({
    selector: 'my-message-input',
    template:`
        <section class="col-md-8 col-md-offset-2" *ngIf="isLoggedIn()">
            <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
                <div class="form-group">
                    <label for="content">Content</label>
                    <input ngControl="content" type="text" class="form-control" id="content" #input [ngModel]="message?.content">
                </div>
                <button type="submit" class="btn btn-primary">{{ !message ? 'Send Message' : 'Save Message'}}</button>
                <button type="button" class="btn btn-danger" (onclick)="onCancel()" *ngIf="message">Cancel</button>
            </form>
        </section> 
    `
})

export class InputComponent implements OnInit{

    message: Message = null;

    constructor(private _messageService: MessageService,  private _errorService: ErrorService, private _authService: AuthService){}

    onSubmit(form:any){
        if(this.message){
            // Edit
            this.message.content = form.content;
            this._messageService.updateMessage(this.message)
                .subscribe(
                    data => console.log(data),
                    error => this._errorService.handleError(error)
                );
            this.message = null;
        }else{
            const message: Message = new Message(form.content, null , 'Dummy');

            this._messageService.addMessage(message)
                .subscribe(
                    data => {
                        console.log(data);
                        this._messageService.messages.push(data);
                    },
                    error => this._errorService.handleError(error)
                );
        }

    }

    onCancel(){
        this.message = null;
    }

    ngOnInit(){
        this._messageService.messageIsEdit.subscribe(
          message => {
              this.message = message;
          }
        );
    }

    isLoggedIn(){
        return this._authService.isLoggedIn();
    }

}