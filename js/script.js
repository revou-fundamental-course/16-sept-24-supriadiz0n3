// Ini Javascript

replaceName();

function replaceName(){
    let nama = prompt('Masukkan Nama Anda ');
    console.log(nama);
    document.getElementById('user-nama').innerHTML = nama;
}

function validationForm(){
    let inputNama = document.getElementById('input-nama').value;
    if(inputNama == '') {
        alert('Inputan Kosong');
    } else {
        document.getElementById('result-nama').innerHTML = inputNama;       
    }

    let inputLahir = document.getElementById('input-lahir').value;
    if(inputLahir == '') {
        alert('Inputan Kosong');
    } else {
        document.getElementById('result-lahir').innerHTML = inputLahir;
        
    }
    console.log(inputLahir);

    let inputGender = document.querySelector('input[name="gender"]:checked').value;
    if(inputGender == '') {
        alert('Inputan Kosong');
    } else {
        document.getElementById('result-gender').innerHTML = inputGender;
        
    }
    console.log(inputGender);

    let inputPesan = document.getElementById('input-pesan').value;
    if(inputPesan == '') {
        alert('Inputan Kosong');
    } else {
        document.getElementById('result-pesan').innerHTML = inputPesan;
        
    }
    console.log(inputPesan);
}

let indexSlide = 1;
showSlide(1);

function nextSlide(n){
    showSlide(indexSlide += n);
}

function showSlide(index){
    // Get Semua Img Banner
    let listImage = document.getElementsByClassName('photo-banner');
    console.log(indexSlide);
    console.log(listImage);

    // Reset IndexSlide
    if(index > listImage.length) indexSlide = 1;

    // Hide All Image
    let i = 0;
    while(i < listImage.length){
        listImage[i].style.display = 'none';
        i++;
    }

    //Show Selected Image
    listImage[indexSlide - 1].style.display = 'block';
    console.log(listImage);

    
}

// Auto Banner
setInterval(() => nextSlide(1), 2000);