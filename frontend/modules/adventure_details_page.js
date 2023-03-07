import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  return(search.slice(11,search.length));
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  // Place holder for functionality to work in the Stubs
 
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {

  try {
    let cityarray = await fetch(config.backendEndpoint + "/adventures/detail?adventure=" + adventureId);
    let data = await cityarray.json();
   return data; 
  }
 catch (err) {
   return null;
 }
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  // Place holder for functionality to work in the Stubs
  
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {

  let name = document.getElementById("adventure-name");
  name.innerHTML = `${adventure.name}`;
  let sub = document.getElementById("adventure-subtitle");
  sub.innerHTML = `${adventure.subtitle}`;

  let images = document.getElementById("photo-gallery");
  adventure.images.forEach((element) => {
    
    let image = document.createElement("div");
    image.setAttribute("class","activity-card-image");
    image.innerHTML= `<img src="${element}" width ="100%" height = "100%">`;
    images.append(image);
    
  });

  let content = document.getElementById("adventure-content");
  content.innerHTML = `${adventure.content}`;

  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM


}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {

  let caro = document.getElementById("photo-gallery");
  caro.innerHTML = `<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" id="caro-inner">

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`

let caroinner = document.getElementById("caro-inner");
let im = document.createElement("div");
im.setAttribute('class',"carousel-item active");
im.innerHTML= `<img src="${images[0]}" width ="100%" height = "100%">`;
caroinner.append(im);

for(let i = 1; i<images.length; i++){
  let newim = document.createElement("div");
  newim.setAttribute('class',"carousel-item");
newim.innerHTML= `<img src="${images[i]}" width ="100%" height = "100%">`;
caroinner.append(newim);
  
}


// caro.forEach((element) => {   
//   let image = document.createElement("div");
//   image.innerHTML= `<img src="${element}" width ="100%" height = "100%">`;
//   image.setAttribute("class","carousel-item");
//   let inner = document.getElementById("inner");
//   image.append(inner);
  
// });

  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images


}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
