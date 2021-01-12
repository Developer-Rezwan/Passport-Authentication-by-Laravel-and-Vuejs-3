require('./bootstrap');

// Vue js implementation

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

// Templates assets
// Jquery
let jQuery = require('jquery');
window.$ = window.jQuery = jQuery;
require('bootstrap');
require('admin-lte/dist/js/adminlte.min.js');
/* require('admin-lte/plugins/chart.js/Chart.min.js');
require('admin-lte/plugins/sparklines/sparkline.js');
 require('admin-lte/plugins/jqvmap/jquery.vmap.min.js');
require('admin-lte/plugins/jqvmap/maps/jquery.vmap.usa.js');
 require('admin-lte/plugins/jquery-knob/jquery.knob.min.js');
// require('admin-lte/plugins/moment/moment-with-locales.js');
require('admin-lte/plugins/daterangepicker/daterangepicker.js');
require('admin-lte/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js');
 require('admin-lte/plugins/summernote/summernote-bs4.min.js');
require('admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js');
 */
