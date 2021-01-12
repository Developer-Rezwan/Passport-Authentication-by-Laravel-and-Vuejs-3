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


// Toastr Alert Setup (https://codeseven.github.io/toastr/demo.html)
window.toastr = require('toastr');
window.toastr.options = {
  "closeButton": true,
  "debug": true,
  "newestOnTop": true,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "500",
  "hideDuration": "2000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

// Set up the Sweet Alert-2 (https://sweetalert2.github.io/)
window.Swal = require('sweetalert2');
