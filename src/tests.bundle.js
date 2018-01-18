import angular from 'angular';
import mock from 'angular-mocks';
import app from './app.js';

let context = require.context('.', true, /\.spec\.js/);

context.keys().forEach(context);