import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './pages/pages';
import AppComponent from './app.component';
import angularBootstrap from 'angular-ui-bootstrap';
import ngSanitize from 'angular-sanitize'
import 'bootstrap'
import '../../node_modules/bootstrap/less/bootstrap.less'

angular.module('app', [
    uiRouter,
    ngSanitize,
    angularBootstrap,
    Common.name,
    Components.name,

])

.config(($urlRouterProvider, $locationProvider, $httpProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('AuthInterceptor');

})

.run(($rootScope, LoginModal, $state, Token) => {
    "ngInject";

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
        var requireLogin = toState.data.requireLogin;

        if (requireLogin && Token.check()) {
            event.preventDefault();

            LoginModal()
                .then(function() {
                    return $state.go(toState.name, toParams);
                })
                .catch(function() {
                    return $state.go('home');
                });
        }
    });

})

.component('app', AppComponent);
