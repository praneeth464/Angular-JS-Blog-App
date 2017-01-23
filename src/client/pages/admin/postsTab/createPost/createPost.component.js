import template from './createPost.html';
import controller from './createPost.controller';
import './createPost.styl';

let createPostComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'vm'
};

export default createPostComponent;
