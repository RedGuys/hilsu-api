module.exports = class ResponseParser {
    static parse(prototype, object) {
        let instance = new prototype.constructor();
        for (let key of Object.keys(instance)) {
            if (typeof instance[key] === "object" && Array.isArray(instance[key])) {
                if(instance[key].length === 0) {
                    if (Array.isArray(object[key])) {
                        instance[key] = object[key];
                    } else if ((key.startsWith("_") || key.startsWith("#")) && Array.isArray(object[key.substring(1)])) {
                        instance[key] = object[key.substring(1)];
                    }
                } else {
                    if (Array.isArray(object[key])) {
                        instance[key] = object[key].map(obj => this.parse(instance[key][0], obj));
                    } else if ((key.startsWith("_") || key.startsWith("#")) && Array.isArray(object[key.substring(1)])) {
                        instance[key] = object[key.substring(1)].map(obj => this.parse(instance[key][0], obj));
                    }
                }
            } else if (typeof instance[key] === "object") {
                if (object[key] !== undefined) {
                    instance[key] = this.parse(instance[key], object[key]);
                } else if ((key.startsWith("_") || key.startsWith("#")) && object[key.substring(1)] !== undefined) {
                    instance[key] = this.parse(instance[key], object[key.substring(1)]);
                }
            } else if (object[key] !== undefined) {
                instance[key] = object[key];
            } else if ((key.startsWith("_") || key.startsWith("#")) && object[key.substring(1)] !== undefined) {
                instance[key] = object[key.substring(1)];
            }
        }
        return instance;
    }
}