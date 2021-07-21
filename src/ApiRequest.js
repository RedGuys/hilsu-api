const Axios = require("axios");

class ApiRequest {
    static requestGET(method, params = {}, options = {v:"v2",token:undefined}) {
        if(options.v === undefined) options.v = "v2";
        return new Promise((resolve, reject) => {
            Axios.get("https://api.hil.su/"+options.v+"/"+method + (options.token?"?accessToken="+options.token:""),{params})
                .catch((err) => {
                    if(err.response) {
                        if(err.response.data) {
                            reject(err.response.data);
                            return;
                        }
                        reject(err.response);
                        return;
                    }
                    reject(err);
                })
                .then((response) => {
                    if(response === undefined) {
                        reject(response);
                        return;
                    }
                    if(response.status >=300) {
                        reject(response);
                        return
                    }
                    if(!response.data.success) {
                        reject(response);
                    }
                    resolve(response.data.response);
                });
        });
    }

    static requestPOST(method, params = {}, body = "", options = {v:"v2",token:undefined}) {
        if(options.v === undefined) options.v = "v2";
        return new Promise((resolve, reject) => {
            Axios.post("https://api.hil.su/"+options.v+"/"+method + (options.token?"?accessToken="+options.token:""),body,{params})
                .catch((err) => {
                    if(err.response) {
                        if(err.response.data) {
                            reject(err.response.data);
                            return;
                        }
                        reject(err.response);
                        return;
                    }
                    reject(err);
                })
                .then((response) => {
                    if(response === undefined) {
                        reject(response);
                        return;
                    }
                    if(response.status >=300) {
                        reject(response);
                        return
                    }
                    if(!response.data.success) {
                        reject(response);
                    }
                    resolve(response.data.response);
                });
        });
    }

    static bodyEncoder(body) {
        let str = "";
        for (let key in body) {
            if(body.hasOwnProperty(key))
                str+=key+"="+body[key]+"&";
        }
        return str.substring(0,str.length-1);
    }
}

module.exports = ApiRequest;