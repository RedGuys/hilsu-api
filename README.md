# hilsu-api
Библиотека для запросов к api.hil.su

- [Авторизация](#Авторизация)
- [Экономика](#Экономика)
  - [Получение баланса](#Получение-баланса)
  - [Список изменений баланса](#Список-изменений-баланса)
  - [Список переводов](#Список-переводов)

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
economy.balance(): Promise<{user:User,balances:UserBalances}>;
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
