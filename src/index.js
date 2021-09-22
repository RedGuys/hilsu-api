import {TransfersResponse} from "./index";

module.exports = {
    "Client": require("./Client"),
    "Economy": require("./Economy"),
    "ApiRequest": require("./ApiRequest"),
    "User": require("./Structures/User"),
    "UserBalances": require("./Structures/UserBalances"),
    "Change": require("./Structures/Change"),
    "Transfer": require("./Structures/Transfer"),
    "TopUser": require("./Structures/TopUser"),
    "ChatClient": require("./chat/ChatClient"),
    "ChatAttachment": require("./chat/Structures/ChatAttachment"),
    "ChatMessage": require("./chat/Structures/ChatMessage"),
    "ChatUser": require("./chat/Structures/ChatUser"),
    "ChatAttachmentMeta": require("./chat/Structures/ChatAttachmentMeta"),
    "ChatAttachmentType": require("./chat/Structures/ChatAttachmentType"),
    "ChatExternalUser": require("./chat/Structures/ChatExternalUser"),
    "ChatSticker": require("./chat/Structures/ChatSticker"),
    "ChatStickerMetadata": require("./chat/Structures/ChatStickerMetadata"),
    "Rank": require("./Structures/Rank"),
    "GetTokenResponse": require("./responses/GetTokenResponse"),
    "ChangesResponse": require("./responses/ChangesResponse"),
    "BalanceResponse": require("./responses/BalanceResponse"),
    "TransfersResponse": require("./responses/TransfersResponse")
}