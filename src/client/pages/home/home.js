import homeComponent from './home.component';

let homeModule = angular.module('home', [])

.config(($stateProvider) => {
    "ngInject";

    $stateProvider
        .state('home', {
            url: '/',
            template: '<home></home>',
            data: {
                requireLogin: false
            }
        });
})

.component('home', homeComponent);

export default homeModule;
