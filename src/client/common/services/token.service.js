class TokenService {

    constructor($window) {
        "ngInject";
        this.store = $window.localStorage;
        this.key = 'auth-token';
        this.user = 'user-name';

    }

    get() {
        return this.store.getItem(this.key);
    }

    getName() {
        return this.store.getItem(this.user);
    }

    set(token) {
        if (token) {
            this.store.setItem(this.key, token);
            this.store.setItem(this.user, this.decodeToken(token).name);
        } else {
            this.store.removeItem(this.key);
            this.store.removeItem(this.user);
        }
    }

    check() {
        if (this.store.getItem(this.key)) {
            return this.isTokenExpired(this.store.getItem(this.key))
        }
        return true;
    }

    clear() {
        this.store.removeItem(this.key);
        this.store.removeItem(this.user);
    }

    urlBase64Decode(str) {
        var output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0:
                {
                    break; }
            case 2:
                { output += '==';
                    break; }
            case 3:
                { output += '=';
                    break; }
            default:
                {
                    throw 'Illegal base64url string!';
                }
        }
        return decodeURIComponent(escape(window.atob(output))); //polifyll https://github.com/davidchambers/Base64.js
    }


    decodeToken(token) {
        var parts = token.split('.');

        if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
        }

        var decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token');
        }

        return JSON.parse(decoded);
    }

    getTokenExpirationDate(token) {
        var decoded;
        decoded = this.decodeToken(token);

        if (typeof decoded.exp === "undefined") {
            return null;
        }

        var d = new Date(0); 
        d.setUTCSeconds(decoded.exp);

        return d;
    };

    isTokenExpired(token, offsetSeconds) {
        var d = this.getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;
        if (d === null) {
            return false;
        }

        return !(d.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    };

}

let tokenModule = angular.module('token', [])

.service('Token', TokenService)

export default tokenModule;
