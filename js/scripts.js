document.addEventListener('DOMContentLoaded', function() {

    let burgerButton = document.getElementsByClassName('burgerButton');
    let cancelButton = document.getElementsByClassName('cancelButton');
    let menu = document.getElementsByClassName('menu');
    let header = document.getElementsByClassName('header');

    burgerButton[0].addEventListener('click', function(){
        menu[0].style.display = 'block';
        header[0].style.display = 'none';
    });

    cancelButton[0].addEventListener('click', function(){
        menu[0].style.display = 'none';
        header[0].style.display = 'block';
    });
    
});

  



