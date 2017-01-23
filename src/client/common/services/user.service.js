class UserService {
    constructor($http, Token, $q) {
        "ngInject";
        this.$q = $q;
        this.$http = $http;
        this.Token = Token;

        this._user = {};
        this._user._id = null;
        this._user.name = null;
        this._user.email = null;
        this._user.password = null;
    }

    get() {
        return this._user;
    }

    set(property, value) {
        this._user[property] = value;
    }

    login(username, password) {
        return this.$http.post('/api/user/authenticate', { username, password })
            .then(function success(response) {
                return response;
            });
    }

    signup(username, password, email) {
        return this.$http.post('/api/user/signup', { username, password, email })
            .then(function success(response) {
                return response;
            });
    }

    getAccount() {
        return this.$http.get('/api/user/get')
            .then((response) => {
                this._user = response.data;
                return response.data;
            });
    }

    saveAccount() {
        return this.$http.put('/api/user/update', this._user)
            .then(function success(response) {
                return response.data;
            });
    }

    isEmailUnique(email) {
            if (!!(email)) {
                var uri = '/api/user/find/' + email;
                return this.$http.get(uri);
            }
            return this.$q.reject("Invalid User name");
        }
        
}

let userModule = angular.module('user', [])

.service('User', UserService);

export default userModule;
