export function input_knob_ch () {

    const main_knob = document.getElementById('knob-input');
    const main_input = document.getElementById('main-input');
    const name_input = document.getElementById('name-input');


    main_knob.addEventListener ('click', () => {

        main_input.click();

        
        main_input.addEventListener ('change', (e) => {

        
            const nama = main_input.files[0].name;
    
            const nama_2 = nama.replace('.',' ');
            const nama_3 = nama_2.replace('jpg',' ');
    
            // console.log(nama_3);
            name_input.innerHTML = nama_3;

         
        });

    
    });


}