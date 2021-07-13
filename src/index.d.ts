export class Client {
    constructor(token: String);

    get baseUrl(): String;
    set baseUrl(value: String);

    get economy(): Economy;

    static getTokenViaPasswordAuth(login: String, password: String): Promise<{ accessToken:String, expires: number }>;
}

export class Economy {
    balance(): Promise<{user:User,balances:UserBalances}>;
}

export class User {
    get id():number;
    get uuid():string;
    get username():string;
}
export class UserBalances {
    get coins():number;
    get gems():number;
}

export class ApiRequest {
    static requestGET(method, params?: object, options?: {v:"v1"|"v2",token:string}): Promise<any>;

    static requestPOST(method, params?: object, body?: any, options?: {v:"v1"|"v2",token:string}): Promise<any>;
}