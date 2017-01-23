import template from './loginmodal.html';

let LoginModal = ($uibModal, $rootScope, Token) => {
    "ngInject";

    let setToken = (token) => {
        Token.set(token);
    };

    return () => {
        var instance = $uibModal.open({
            template: template,
            controller: 'LoginModalCtrl',
            controllerAs: 'LoginModalCtrl'
        })

        return instance.result.then(setToken);
    };


};

export default LoginModal;
