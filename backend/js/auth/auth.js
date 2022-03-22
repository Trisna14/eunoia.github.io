export function upload_poster_auth () {

    const main_knob = document.getElementById('main-knob');
    const main_input = document.getElementById('main-input');
    const input_name = document.getElementById('input-name');

    main_knob.addEventListener('click', () => {

        main_input.click();

            main_input.addEventListener ('change', (e) => {

        
            const nama = main_input.files[0].name;
    
            const nama_2 = nama.replace('.',' ');
            const nama_3 = nama_2.replace('jpg',' ');
    
            // console.log(nama_3);
            input_name.innerHTML = nama_3;

         
        });
    });
}