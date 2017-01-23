import template from './postDescription.html';
import controller from './postDescription.controller';
import './postDescription.styl';

let postDescriptionComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'vm'
};

export default postDescriptionComponent;
