import template from './signup.html';
import controller from './signup.controller';
import './signup.styl';

let signupComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'vm'
};

export default signupComponent;
