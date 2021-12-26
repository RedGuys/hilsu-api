//Clients
export class Client {
    constructor(token: String);

    get baseUrl(): String;
    set baseUrl(value: String);

    get economy(): Economy;

    get auction(): Auction;

    get exchange(): ExchangeClient;

    chat(chat: "talk" | "market" | "support"): ChatClient;

    userInfo(): Promise<UserInfoResponse>;

    static getTokenViaPasswordAuth(login: String, password: String): Promise<GetTokenResponse>;
}

export class ChatClient {
    constructor(chat: "talk" | "market" | "support", token?: string);

    sendMessage(text: string, options?: { reply?: number, acknowledgement?: string });

    on(event: "open" | "keepAlive", listener: () => void);
    on(event: "messageDeleted" | "messageEdited" | "messageReceived" | "messageSelfReceived", listener: (message: ChatMessage) => void);
    on(event: "messageAcknowledged", listener: (messageResult: ChatMessageResult, acknowledgement: string) => void);
}

export class ExchangeClient {
    constructor(token: string);

    connect(): Promise<void>;

    change(from: "gems" | "balance" | "money", to: "gems" | "balance" | "money", amount: number): Promise<ExchangeChange>;

    get settings(): ExchangeSettings;

    get pool(): ExchangePool;

    get rates(): ExchangeRates;

    get history(): ExchangeHistory;

    on(event: "settingsUpdate", listener: (settings: ExchangeSettings) => void);
    on(event: "poolUpdate", listener: (pool: ExchangePool) => void);
    on(event: "ratesUpdate", listener: (rates: ExchangeRates) => void);
    on(event: "historyUpdate", listener: (rates: ExchangeHistory) => void);
    on(event: "ping", listener: () => void);
    on(event: "successChange", listener: (change: ExchangeChange) => void);
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
    get userId(): string;

    get username(): string;

    get count(): number;
}

export class ChangesCountResponse {
    get userId(): string;

    get username(): string;

    get count(): number;
}

export class TopResponse {
    get users(): TopUser[];
}

export class TransferResponse {
    get currency(): "coins" | "gems";

    get senderId(): string;

    get senderName(): string;

    get targetId(): string;

    get targetName(): string;

    get balance(): number;
}

export class ItemsResponse {
    get auc_durations(): [AuctionDuration];

    get duration_extended(): boolean;

    get forbidden_sale(): boolean;

    get infinite(): boolean;

    get items(): [Item];

    get reset_auc_duration(): string;

    get shop_durations(): [ShopDuration];

    get ws_slot_count(): number;
}

export class ListResponse {
    get auc(): [AuctionItem];

    get filters(): { filters: object };

    get filters_dump(): string;

    get filters_tags(): [object];

    get mods(): [Mod];

    get perPage(): number;

    get totalPageCount(): number;
}

export class UserInfoResponse {
    get first_name(): string;

    get is_birthday(): boolean;

    get notifications(): UserNotifications;
}

//API classes
export class Economy {
    balance(): Promise<BalanceResponse>;

    changes(currency?: "coins" | "gems", limit?: number, offset?: number): Promise<ChangesResponse>;

    transfers(currency?: "coins", limit?: number, offset?: number): Promise<TransfersResponse>;

    transfersCount(currency?: "coins"): Promise<TransfersCountResponse>;

    changesCount(currency?: "coins" | "gems"): Promise<ChangesCountResponse>;

    top(currency?: "coins" | "gems", limit?: number): Promise<TopResponse>;

    transfer(target: string, amount: number, description?: string, currency?: "coins" | "gems"): Promise<TransferResponse>;
}

export class Auction {
    items(): Promise<ItemsResponse>;

    list(page?: number, order?: "expires_at_asc" | "buyout_price_asc" | "top_bid_asc" | "expires_at_desc" | "buyout_price_desc" | "top_bid_desc"): Promise<ListResponse>;
}

//Structures

export class ExchangeSettings {
    get maxExchange(): number;

    get exchangeFee(): number;
}

export class ExchangePool {
    get balance(): number;

    get gems(): number;

    get money(): number;
}

export class ExchangeRates {
    get maxExchange(): { balance: number, money: number, gems: number };

    get rates(): [{ from: "gems" | "balance" | "money", to: "gems" | "balance" | "money", value: number }];
}

export class ExchangeHistory {
    get current(): { start: string, finish: string, rates: [{ from: "gems" | "balance" | "money", to: "gems" | "balance" | "money", value: { high: number, low: number, open: number, close: number } }] }

    get data(): [{ start: string, finish: string, rates: [{ from: "gems" | "balance" | "money", to: "gems" | "balance" | "money", value: { high: number, low: number, open: number, close: number } }] }];
}

export class ExchangeChange {
    get from(): { currency: "gems" | "balance" | "money", balance: number };

    get to(): { currency: "gems" | "balance" | "money", balance: number };
}

export class User {
    get id(): number;

    get uuid(): string;

    get username(): string;
}

export class TopUser {
    get num(): number;

    get user(): User;

    get balance(): number;
}

export class UserBalances {
    get coins(): number;

    get gems(): number;
}

export class Change {
    get date(): Date;

    get source(): string;

    get description(): string;

    get delta(): number;
}

export class Transfer {
    get id(): number;

    get peerId(): string;

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

    saveTo(path: string): Promise<void>;
}

declare class ChatUser {
    get type(): String;

    get id(): number | undefined;

    get uuid(): String | undefined;

    get username(): String | undefined;

    get rank(): Rank | undefined;

    get isMe(): boolean | undefined;

    get external(): ChatExternalUser | undefined;

    get firstName(): String | undefined;

    get lastName(): String | undefined;

    get name(): String | undefined;

    get app(): String | undefined;

    get appName(): String | undefined;

    get externalId(): String | undefined;
}

export class ChatExternalUser {
    get app(): string;

    get appName(): string;

    get externalId(): string;

    get name(): string;
}

export class Rank {
    get code(): string;

    get title(): string;
}

export class ChatAttachmentType {
    get kind(): string;

    get isThumbnail(): boolean;

    get thumbnailBaseKind(): string | undefined;
}

export class ChatSticker {
    get id(): number;

    get stickerSetId(): number;

    get emoji(): string;

    get metadata(): ChatStickerMetadata;

    get downloadToken(): string;

    get thumbDownloadToken(): string;

    get sha256(): string | undefined;

    get thumbSha256(): string | undefined;
}

export class ChatAttachmentMeta {
    get caption(): string | undefined;

    get fileName(): string | undefined;

    get mimeType(): string | undefined;

    get fileSize(): number | undefined;

    get width(): number | undefined;

    get height(): number | undefined;

    get performer(): string | undefined;

    get title(): string | undefined;

    get duration(): number | undefined;
}

export class ChatStickerMetadata {
    get width(): number;

    get height(): number;

    get thumbWidth(): number;

    get thumbHeight(): number;

    get isAnimated(): boolean;

    get fileSize(): number;

    get thumbSize(): number;
}

export class ChatMessageResult {
    get type(): string;

    get id(): number;

    get muter(): string;

    get expiresAt(): number;
}

export class AuctionDuration {
    get value(): number;

    get format(): string;

    get reset(): boolean;
}

export class Item {
    get id(): number;

    get item_hooks(): [string];

    get item_name(): string;

    get item_name_text(): string;

    get item_amount(): number;

    get item_sprite(): string;

    get forbidden_for_sale(): boolean | undefined;

    get minetip(): string;

    sellShopFee(price: number, amount?: number, duration?: number, hidden?: boolean): Promise<SellFee>;

    sellAucFee(buyoutPrice: number, startBid: number, amount?: number, duration?: number, hidden?: number): Promise<SellFee>;

    trash(): Promise<string>;

    sellShop(price: number, amount?: number, duration?: number, hidden?: boolean): Promise<number>;

    sellAuc(buyoutPrice: number, startBid: number, amount?: number, duration?: number, hidden?: number): Promise<number>;
}

export class ShopDuration {
    get value(): number;

    get format(): string;
}

export class AuctionItem {
    get id(): number;

    get my(): boolean;

    get user(): string;

    get type(): "auc" | "shop";

    get item_hooks(): [string];

    get item_name(): string;

    get item_name_text(): string;

    get item_amount(): number;

    get item_sprite(): string;

    get minetip(): string;

    get buyout_price(): number | undefined;

    get bid_count(): string | undefined;

    get sold_count(): number | undefined;

    get hidden(): boolean;

    get infinite(): boolean;

    get extended(): boolean;

    get expired(): boolean;

    get expired_at(): string;

    get expires_at(): string;

    get shop_can_cancel(): boolean;

    get shop_can_buy(): boolean;

    get auc_can_buy(): boolean;

    get auc_can_bid(): boolean;

    get start_bid(): number | undefined;

    get top_bid(): number | undefined;

    get minimum_bid(): number | undefined;

    get buyers(): [Buyer];

    get bids(): [Bid];

    get top_bidder(): false;

    get auc_bid_one(): string | undefined;

    get auc_price_one(): string | undefined;

    buy(amount?: number): Promise<void>;

    bid(bid): Promise<void>;

    buyout(): Promise<void>;
}

export class Mod {
    get chosen(): boolean;

    get id(): number;

    get item_count(): number;

    get name(): string;
}

export class Buyer {
    get to_user(): string;

    get quantity(): number;

    get price(): number;

    get created_at(): string;
}

export class Bid {
    get created_at(): string;

    get user(): string;

    get bid(): number;
}

export class SellFee {
    get fee(): number;

    get formattedFee(): string;

    get nofee(): boolean;
}

export class UserNotifications {
    get count():number

    get perPage():number;

    get notifications():[Notification];

    get totalPageCount():number;
}

export class Notification {
    get date():string;

    get flags():string;

    get id():number;

    get text():string;
}

export class UserSkin {
    get flat_url(): string;
    get url(): string;
    get url_v2(): string;
    get cape_url(): string;
    get avatar(): string;
    get has_skin(): boolean;
    get has_cape(): boolean;
    get has_cape_cap(): boolean;
    get has_hd(): boolean;
    get has_one_hd(): boolean;
}

export class Stats {
    get ref(): number;
    get level(): number;
    get warns(): string;
    get exp(): number;
    get total_exp(): number;
}


//Utils
export class ApiRequest {
    static requestGET(method, params?: object, options?: { v: "v1" | "v2", token: string }): Promise<any>;

    static requestMainGET(method, params?: object, options?: { v: "v0", token: string }): Promise<any>;

    static requestPOST(method, params?: object, body?: any, options?: { v: "v1" | "v2", token: string }): Promise<any>;
}

export class ResponseParser {
    static parse(prototype: any, object: Object): any;
}