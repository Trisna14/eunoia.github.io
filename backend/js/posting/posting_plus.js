export function input_knob () {

    const knob = document.getElementById('upload-knob');
    const main_upload = document.getElementById('main-upload');
    const upload_name = document.getElementById('upload-name');


    knob.addEventListener ('click', () => {

        main_upload.click();

        
        main_upload.addEventListener ('change', (e) => {

            // console.log(main_upload.files[0].name);
            const nama = main_upload.files[0].name;
    
            const nama_2 = nama.replace('.',' ');
            const nama_3 = nama_2.replace('jpg',' ');
    
            // console.log(nama_3);
            upload_name.innerHTML = nama_3;

            // console.log(main_upload.substring);
        });

    
    });

    // console.log('ok');
}