import { navbar_knob } from "./navbar/navbar_knob.js";
navbar_knob();

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
