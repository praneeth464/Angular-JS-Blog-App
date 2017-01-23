import navbarComponent from './navbar.component';

let navbarModule = angular.module('navbar', [])

.component('nav', navbarComponent);

export default navbarModule;
