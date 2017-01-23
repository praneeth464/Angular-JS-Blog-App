import LoginModal from './loginmodal.service';
import LoginModalController from './loginModal.controller';

let loginModalModule = angular.module('loginModal', [])


.service('LoginModal', LoginModal)
    .controller('LoginModalCtrl', LoginModalController)

export default loginModalModule;
