class HttpInterceptor {
    constructor() {
        ['request', 'requestError', 'response', 'responseError']
        .forEach((method) => {
            if (this[method]) {
                this[method] = this[method].bind(this);
            }
        });
    }
}

class AuthInterceptor extends HttpInterceptor {
    constructor(Token, $q, $injector, $rootScope, $timeout) {
        "ngInject";

        super();
        let LoginModal, $http, $state;

        $timeout(() => {
            this.LoginModal = $injector.get('LoginModal');
            this.$http = $injector.get('$http');
            this.$state = $injector.get('$state');
        });

        this.Token = Token;
        this.$q = $q;
        this.$rootScope = $rootScope;
    }

    request(config) {
        let token = this.Token.get();
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
    }

    responseError(rejection) {

        if (rejection.status !== 401) {
            return this.$q.reject(rejection);
        }

        this.Token.clear();
        let deferred = this.$q.defer();

        this.LoginModal()
            .then(() => {
                deferred.resolve(this.$http(rejection.config));
            })
            .catch(() => {
                this.$state.go('home');
                deferred.reject(rejection);
            });

        return this.$q.reject(rejection);
    }
}


let AuthInterceptorModule = angular.module('authInterceptor', [])

.service('AuthInterceptor', AuthInterceptor)

export default AuthInterceptorModule;
