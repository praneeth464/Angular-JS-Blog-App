import postComponent from './post.component';

let postModule = angular.module('post', [])

.config(($stateProvider) => {
    "ngInject";

    $stateProvider
        .state('post', {
            url: '/:year/:month/:day/:slug',
            template: '<post></post>',
            data: {
                requireLogin: false
            }
        });
})

.component('post', postComponent);

export default postModule;
