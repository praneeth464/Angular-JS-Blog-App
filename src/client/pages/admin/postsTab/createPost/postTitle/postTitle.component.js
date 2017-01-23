import template from './postTitle.html';
import controller from './postTitle.controller';
import './postTitle.styl';

let postTitleComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'vm'
};

export default postTitleComponent;
