import template from './admin.html';
import controller from './admin.controller';
import './admin.styl';

let adminComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'vm'
};

export default adminComponent;
