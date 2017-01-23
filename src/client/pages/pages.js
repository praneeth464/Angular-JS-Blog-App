import Home from './home/home';
import Signup from './signup/signup';
import Admin from './admin/admin';
import Post from './post/post';

let pagesModule = angular.module('app.pages', [
    Home.name,
    Signup.name,
    Admin.name,
    Post.name
]);

export default pagesModule;
