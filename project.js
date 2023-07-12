const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");

// UI Objesini Başlatma

const ui = new UI();

// Tüm Eventleri Yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit", addCar);
}

function addCar(e){
    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    if (title === "" || price === "" || url
    === ""){
        //Hata
    }
    else{
        // yeni Araç
        const newCar = new Car(title,price,
        url);

        ui.addCarToUI(newCar); // arayüze araç ekleme
    }
    ui.clearInputs(titleElement,urlElement,
    priceElement);

    e.preventDefault();
}