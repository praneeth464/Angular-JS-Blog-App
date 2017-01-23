import adminComponent from './admin.component';
import Posts from './postsTab/postsTab';
import Account from './accountTab/accountTab';

let adminModule = angular.module('admin', [
    Posts.name,
    Account.name
])

.config(($stateProvider) => {
    "ngInject";

    $stateProvider
        .state('admin', {
            url: '/admin',
            template: '<admin></admin>',
            data: {
                requireLogin: true
            }
        });
})

.component('admin', adminComponent);

export default adminModule;
