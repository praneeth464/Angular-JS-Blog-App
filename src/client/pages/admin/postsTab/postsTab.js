import postsTabComponent from './postsTab.component';
import createPost from './createPost/createPost';
import displayPost from './displayPost/displayPost';

let postsTabModule = angular.module('postsTab', [
    createPost.name,
    displayPost.name
])

.component('postsTab', postsTabComponent);

export default postsTabModule;
