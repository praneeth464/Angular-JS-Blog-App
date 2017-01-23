import template from './accountTab.html';
import controller from './accountTab.controller';
import './accountTab.styl';

let accountTabComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'vm'
};

export default accountTabComponent;
