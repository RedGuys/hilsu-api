const Axios = require("axios");

class ApiRequest {
    static requestGET(method, params = {}, options = {v:"v2",token:undefined}) {
        if(options.v === undefined) options.v = "v2";
        return new Promise((resolve, reject) => {
            Axios.get("https://api.hil.su/"+options.v+"/"+method + (options.token?"?accessToken="+options.token:""),{params})
                .catch((err) => reject(err))
                .then((response) => {
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
                .catch((err) => reject(err))
                .then((response) => {
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
}

module.exports = ApiRequest;