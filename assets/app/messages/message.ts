export class Message{
    content: string;
    userName: string;
    messageId: string;
    userId: string;

    constructor (content: string, messageId?: string, userName?: string, userId?: string){
        this.content = content;
        this.messageId = messageId;
        this.userName = userName;
        this.userId = userId;
    }
}