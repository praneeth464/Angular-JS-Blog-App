import createPostComponent from './createPost.component';
import PostTitle from './postTitle/postTitle';
import PostDescription from './postDescription/postDescription';

let createPostModule = angular.module('createPost', [
    PostTitle.name,
    PostDescription.name
])

.component('createPost', createPostComponent);

export default createPostModule;
