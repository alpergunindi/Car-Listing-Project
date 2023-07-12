const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");

// UI Objesini Başlatma

const ui = new UI();

const storage = new Storage();

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
        
        ui.displayMessages("Tüm alanları doldurun...", "danger");
    }
    else{
        // yeni Araç
        const newCar = new Car(title,price,url);

        ui.addCarToUI(newCar); // arayüze araç ekleme

        storage.addCarToStorage(newCar);
        
        ui.displayMessages("Araç başarıyla eklendi...","success");
    }
    ui.clearInputs(titleElement,urlElement,
    priceElement);

    e.preventDefault();
}