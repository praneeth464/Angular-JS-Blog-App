import signupComponent from './signup.component';


let signupModule = angular.module('signup', [])
    .config(($stateProvider) => {
        "ngInject";

        $stateProvider
            .state('signup', {
                url: '/signup',
                template: '<signup></signup>',
                data: {
                    requireLogin: false
                }
            });
    })
    .component('signup', signupComponent);

export default signupModule;
