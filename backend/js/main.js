
import { navbar_knob } from "./navbar/navbar_knob.js";
if (document.getElementById('navbar-knob')) {
    navbar_knob();
} else {

}


import { input_knob } from "./posting/posting_plus.js";
if (document.getElementById('upload-knob')) {
    console.log('go');
    input_knob();
} else {
    console.log('down');
}


import { input_knob_ch } from "./posting/posting_change.js";
if (document.getElementById('knob-input')) {
    console.log('go');
    input_knob_ch();
} else {
    console.log('down');
}

import { upload_poster_auth } from "./auth/auth.js";
if ( document.getElementById('main-knob')) {
    upload_poster_auth();
}

