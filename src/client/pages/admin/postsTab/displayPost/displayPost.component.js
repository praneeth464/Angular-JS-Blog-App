import template from './displayPost.html';
import controller from './displayPost.controller';
import './displayPost.styl';

let displayPostComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'vm'
};

export default displayPostComponent;
