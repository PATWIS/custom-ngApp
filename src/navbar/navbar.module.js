import navbarDirective from './navbar.directive';

const navbarModule = angular
.module('patwisApp.navbar', [])
.directive('navbar', () => new navbarDirective())

export default navbarModule