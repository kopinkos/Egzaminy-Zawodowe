const blokPrawy = document.querySelector('.prawa');

const btnColor = document.querySelectorAll('button');

btnColor[0].addEventListener('click',function(){
    blokPrawy.style.backgroundColor = 'Indigo';
});

btnColor[1].addEventListener('click',function(){
    blokPrawy.style.backgroundColor = 'SteelBlue';
});

btnColor[2].addEventListener('click',function(){
    blokPrawy.style.backgroundColor = 'Olive';
});


const kolorczcionki = document.querySelector('select');

kolorczcionki.addEventListener('change', function(){
    blokPrawy.style.color = kolorczcionki.value;
});

const rozmiarCzcionki = document.querySelector('input[name="czcionka"]');

rozmiarCzcionki.addEventListener('blur', function(){
    blokPrawy.style.fontSize = rozmiarCzcionki.value;
});

const ramka = document.querySelector('input[name="ramka"]');

const image = document.querySelector('section img');

ramka.addEventListener('change', function(){
    if(!ramka.checked)
    image.style.border = 'none';
    if(ramka.checked)
    image.style.border = '1px solid white';
});


const sex = document.querySelector('ul')
const punkt = document.querySelectorAll('input[name="punktory"]');
 
punkt[0].addEventListener('click', function(){
    sex.style.listStyleType = 'disc';
});
 
punkt[1].addEventListener('click', function(){
    sex.style.listStyleType = 'square';
});
 
punkt[2].addEventListener('click', function(){
    sex.style.listStyleType = 'circle';
});
