export function navbar_knob () {

    const knob = document.getElementById('navbar-knob');
    const navbar = document.getElementsByClassName('navbar')[0];

    knob.addEventListener ('click', function () {

        console.log('ok');
        navbar.classList.toggle('knob_show');
    });
}