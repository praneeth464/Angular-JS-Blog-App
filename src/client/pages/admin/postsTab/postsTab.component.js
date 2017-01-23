import template from './postsTab.html';
import controller from './postsTab.controller';
import './postsTab.styl';

let postsTabComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'vm'
};

export default postsTabComponent;
