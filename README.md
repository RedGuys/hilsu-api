# [hilsu-api](https://www.npmjs.com/package/hilsu-api)
Библиотека для запросов к api.hil.su

- [Авторизация](#Авторизация)
  
- [Экономика](#Экономика)
    - [Получение баланса](#Получение-баланса)
    - [Список изменений баланса](#Список-изменений-баланса)
    - [Список переводов](#Список-переводов)
    - [Количество переводов](#Количество-переводов)
    - [Количество изменений баланса](#Количество-изменений-баланса)
    - [Топ по балансам](#Топ-по-балансам)
    - [Перевод средств](#Перевод-средств)
    
- [Информация о пользователе](#Информация-о-пользователе)

- [Онлайн](#Онлайн)

## Авторизация
Для начала, вам нужно получить токен, через который вы будете работать, самый простой способ:
```js
let data = await HilSuApi.Client.getTokenViaPasswordAuth("login", "pass");
console.log(data.accessToken);
```
После чего можете инициализироавть клиент с использованием этого токена:
```js
let client = new HilSuApi.Client("token");
```
## Экономика

```js
let economy = client.economy;
```
### Получение баланса
```js
economy.balance(): Promise<{user:ChatUser,balances:UserBalances}>;
```
```js
client.economy.balance().then(data =>{
    console.log(data.user.username + " has "+data.balances.coins + " coins")
}).catch(err => console.log(err));
```
### Список изменений баланса
```js
economy.changes(currency?: "coins"|"gems",limit?: number, offset?: number): Promise<{userId: string, username: string, changes: Change[]}>;
```
```js
client.economy.changes("coins",5,0).then(data =>{
    console.log(data.username + " has change "+data.changes[0].source + " at " + data.changes[0].date.toISOString() + " with delta " + data.changes[0].delta)
}).catch(err => console.log(err));
```

### Список переводов
```js
economy.transfers(currency?: "coins",limit?: number, offset?: number): Promise<{userId: string, username: string, transfers: Transfer[]}>;
```
```js
client.economy.transfers("coins",5,0).then(data =>{
    console.log(data.username + " has transfer "+data.transfers[0].id + " at " + data.transfers[0].time.toISOString() + " with delta " + data.transfers[0].delta + " to "+data.transfers[0].peerName)
}).catch(err => console.log(err));
```

### Количество переводов
```js
economy.transfersCount(currency?: "coins"): Promise<{userId: string, username: string, count: number}>;
```
```js
client.economy.transfersCount("coins").then(data =>{
    console.log(data.username + " has "+data.count+" transfers");
}).catch(err => console.log(err));
```

### Количество изменений баланса
```js
economy.changesCount(currency?: "coins"|"gems"): Promise<{userId: string, username: string, count: number}>;
```
```js
client.economy.changesCount("gems").then(data =>{
    console.log(data.username + " has "+data.count+" changes");
}).catch(err => console.log(err));
```

### Топ по балансам
```js
economy.top(currency?: "coins"|"gems", limit?: number): Promise<{users: TopUser[]}>;
```
```js
client.economy.top("gems",1).then(data =>{
    console.log(data.users[0].num+") "+data.users[0].user.username+": "+data.users[0].balance);
}).catch(err => console.log(err));
```

### Перевод средств
```js
economy.transfer(target: string, amount: number, description?: string, currency?: "coins"|"gems"): Promise<{currency: string, senderId: string, senderName: string, targetId: string, targetName: string, balance: number}>;
```
```js
client.economy.transfer("MailGik",1,"What the fox say?","gems").then(data =>{
    console.log(data.senderName + " send to " + data.targetName + " 1 " + data.currency + " and have now " + data.balance + " " + data.currency);
}).catch(err => console.log(err));
```

## Информация о пользователе
```js
userInfo(): Promise<UserInfoResponse>;
```
```js
client.userInfo().then(data => {
    console.log(`My name is ${data.first_name} and i have ${data.notifications.count} new notifications:`);
    for (let notification of data.notifications.notifications) {
        console.log(notification.text)
    }
}).catch(err => console.log(err));
```


## Онлайн
```js
online(): Promise<[MonitoringServer]>;
```
```js
client.online().then(data => {
    for (let server of data) {
        console.log(`${server.title} (${server.players}/${server.slots})`);
    }
});
```
```text
Sandbox (3/50)
HiPower (2/50)
HiTech (2/50)
...
```