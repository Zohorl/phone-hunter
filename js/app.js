const allPhones = () => {
    const searchField = document.getElementById('search-box');
    const searchText = searchField.value;
    // phone search api
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(Response => Response.json())
        .then(data => phonesSearch(data.data.slice(0, 20)))
}
// phones search
const phonesSearch = phones => {
    const phoneResults = document.getElementById('phone-results');
    // clear phone result
    phoneResults.textContent = '';
    for (const phone of phones) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card w-75 my-3 p-5">
            <img src="${phone.image}" alt="">
            <h5 class="pt-3">Brand : ${phone.brand}</h5>
            <h5>Model : ${phone.phone_name}</h5>
            <button onclick="showDetails('${phone.slug}')" class="bg-warning text-white fs-4 border-0">Details</button>
       </div>
        `;
        phoneResults.appendChild(div)
    }
}
// Phone details 
const showDetails = id => {
    // phone detail api
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(Response => Response.json())
        .then(data => showInformation(data.data))
}
const showInformation = info => {
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-75 my-5 px-4 py-2 mx-auto shadow-lg ">
            <img class="w-25 mx-auto" src="${info.image}" alt="">
            <h5 class="pt-3">Brand : ${info.brand}</h5>
            <h6>Model : ${info.name}</h6>
            <h6>Slug-Id : ${info.slug}</h6>
            <h6>Chipset : ${info.mainFeatures.chipSet}</h6>
            <h6>Display : ${info.mainFeatures.displaySize}</h6>
            <h6>Memory : ${info.mainFeatures.memory}</h6>
            <h6>Storage : ${info.mainFeatures.storage}</h6>
            <h6>Sensors : ${info.mainFeatures.sensors}</h6>
            <h6>Release Date : ${info.releaseDate}</h6>
            <hr>
            <h6>Others Features :<h6>
            <h6>Bluetooths : ${info.others.Bluetooth}</h6>
            <h6>GPS : ${info.others.GPS}</h6>
            <h6>NFC : ${info.others.NFC}</h6>
            <h6>Radio : ${info.others.Radio}</h6>
            <h6>USB : ${info.others.USB}</h6>
            <h6>WLAN : ${info.others.WLAN}</h6>
       </div>
    `;
    phoneDetails.appendChild(div)
}
