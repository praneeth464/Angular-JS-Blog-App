import Navbar from './components/navbar/navbar';
import User from './services/user.service';
import Post from './services/post.service';
import Msg from './services/message.service';
import Token from './services/token.service';
import AuthInterceptor from './services/interceptor.service';
import LoginModal from './components/loginmodal/loginmodal';

let commonModule = angular.module('app.common', [
    LoginModal.name,
    Navbar.name,
    User.name,
    Post.name,
    Msg.name,
    Token.name,
    AuthInterceptor.name
]);

export default commonModule;
