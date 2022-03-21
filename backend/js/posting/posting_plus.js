export function input_knob () {

    const knob = document.getElementById('upload-knob');
    const main_upload = document.getElementById('main-upload');


    knob.addEventListener ('click', () => {

        main_upload.click();

        console.log(main_upload);
    });

    // console.log('ok');
}