import template from './post.html';
import controller from './post.controller';
import './post.styl';

let postComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'vm'
};

export default postComponent;
