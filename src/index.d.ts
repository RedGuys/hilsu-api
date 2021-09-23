//Clients
export class Client {
    constructor(token: String);

    get baseUrl(): String;
    set baseUrl(value: String);

    get economy(): Economy;

    static getTokenViaPasswordAuth(login: String, password: String): Promise<GetTokenResponse>;
}

export class ChatClient {
    constructor(chat: "talk" | "market" | "support", token?: string);

    sendMessage(text: string, options?:{reply?:number,acknowledgement?:string});

    on(event: "open"|"keepAlive", listener: () => void);
    on(event: "messageDeleted"|"messageEdited"|"messageReceived"|"messageSelfReceived", listener: (message:ChatMessage) => void);
    on(event: "messageAcknowledged", listener: (messageResult:ChatMessageResult, acknowledgement:string) => void);
}

//Responses
export class GetTokenResponse {
    get accessToken(): String;
    get expires(): number;
}

export class ChangesResponse {
    get userId(): string;
    get username(): string;
    get changes(): Change[];
}

export class TransfersResponse {
    get userId(): string;
    get username(): string;
    get transfers(): Transfer[];
}

export class BalanceResponse {
    get user(): User;
    get balance(): UserBalances;
}

export class TransfersCountResponse {
    get userId():string;
    get username():string;
    get count():number;
}

//API classes
export class Economy {
    balance(): Promise<BalanceResponse>;
    changes(currency?: "coins"|"gems",limit?: number, offset?: number): Promise<ChangesResponse>;
    transfers(currency?: "coins",limit?: number, offset?: number): Promise<TransfersResponse>;
    transfersCount(currency?: "coins"): Promise<TransfersCountResponse>;
    changesCount(currency?: "coins"|"gems"): Promise<{userId: string, username: string, count: number}>;
    top(currency?: "coins"|"gems", limit?: number): Promise<{users: TopUser[]}>;

    transfer(target: string, amount: number, description?: string, currency?: "coins"|"gems"): Promise<{currency: string, senderId: string, senderName: string, targetId: string, targetName: string, balance: number}>;
}

//Structures
export class User {
    get id():number;
    get uuid():string;
    get username():string;
}

export class TopUser {
    get num():number;
    get user():User;
    get balance():number;
}

export class UserBalances {
    get coins():number;
    get gems():number;
}

export class Change {
    get date(): Date;
    get source(): string;
    get description(): string;
    get delta(): number;
}

export class Transfer {
    get id(): number;
    get peerId():string;
    get peerName(): string;
    get delta(): number;
    get comment(): string;
    get time(): Date;
}

export class ChatMessage {
    get id(): number;

    get telegramId(): number | undefined;

    get sender(): ChatUser;

    get replyTo(): number | undefined;

    get replyToMessage(): ChatUser | undefined;

    get text(): string;

    get forwardedFrom(): ChatUser | undefined;

    get attachments(): ChatAttachment[];

    get createdAt(): number;

    get editedAt(): number | undefined;

    get isDeleted(): boolean | undefined;

    reply(text: string, options: { acknowledgement?: string });
}

declare class ChatAttachment {
    get id(): number;

    get kind(): ChatAttachmentType;

    get primaryId(): number | undefined;

    get downloadToken(): string;

    get sha256(): string | undefined;

    get sticker(): ChatSticker | undefined;

    get meta(): ChatAttachmentMeta;

    saveTo(path: string):Promise<void>;
}


declare class ChatUser {
    get type():String;
    get id():number|undefined;
    get uuid():String|undefined;
    get username():String|undefined;
    get rank():Rank|undefined;
    get isMe():boolean|undefined;
    get external():ChatExternalUser|undefined;
    get firstName():String|undefined;
    get lastName():String|undefined;
    get name():String|undefined;
    get app():String|undefined;
    get appName():String|undefined;
    get externalId():String|undefined;
}

export class ChatExternalUser {
    get app():string;
    get appName():string;
    get externalId():string;
    get name():string;
}

export class Rank {
    get code():string;
    get title():string;
}

export class ChatAttachmentType {
    get kind():string;
    get isThumbnail():boolean;
    get thumbnailBaseKind():string|undefined;
}

export class ChatSticker {
    get id():number;
    get stickerSetId():number;
    get emoji():string;
    get metadata():ChatStickerMetadata;
    get downloadToken():string;
    get thumbDownloadToken():string;
    get sha256():string|undefined;
    get thumbSha256():string|undefined;
}

export class ChatAttachmentMeta {
    get caption():string|undefined;
    get fileName():string|undefined;
    get mimeType():string|undefined;
    get fileSize():number|undefined;
    get width():number|undefined;
    get height():number|undefined;
    get performer():string|undefined;
    get title():string|undefined;
    get duration():number|undefined;
}

export class ChatStickerMetadata {
    get width():number;
    get height():number;
    get thumbWidth():number;
    get thumbHeight():number;
    get isAnimated():boolean;
    get fileSize():number;
    get thumbSize():number;
}

export class ChatMessageResult {
    get type():string;
    get id():number;
    get muter():string;
    get expiresAt():number;
}

//Utils
export class ApiRequest {
    static requestGET(method, params?: object, options?: {v:"v1"|"v2",token:string}): Promise<any>;

    static requestPOST(method, params?: object, body?: any, options?: {v:"v1"|"v2",token:string}): Promise<any>;
}