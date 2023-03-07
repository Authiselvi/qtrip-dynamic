
import config from "../conf/index.js";

//Implementation to extract city from query params
function getCityFromURL(search) {
  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it

  return (search.slice(6,search.length));


}

//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
  try {
    let cityarray = await fetch(`${config.backendEndpoint}/adventures?city=${city}`);
    let data = await cityarray.json();
   return data; }
 catch (err) {
   return null;
 
 }
  // TODO: MODULE_ADVENTURES
  // 1. Fetch adventures using the Backend API and return the data

}

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures) {
  // TODO: MODULE_ADVENTURES
  // 1. Populate the Adventure Cards and insert those details into the DOM
  let parent  = document.getElementById("data");
  adventures.forEach((element)=> {
  let card = document.createElement("div");
  card.setAttribute("class","col-12 col-sm-6 col-lg-3 mb-4");
  card.innerHTML= `
    <a href="pages/adventures/detail/?adventure=${element.id}" id=${element.id}>
     <div class="card activity-card">
     <div class="category-banner">${element.category} </div>
      <img src=${element.image} class="activity-card-image" />
      <span class="d-flex justify-content-between m-1">
      <b class="ad">${element.name}</b>
      <span class="rate" >₹${element.costPerHead}</span></span>
      <span class="d-flex justify-content-between m-1">
      <b class="ad">Duration</b>
      <span class="rate" >${element.duration} Hours</span></span>
     </div>
    </a>`;
    parent.append(card);
});
}
  

//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  console.log("Hello")
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on Duration and return filtered list
  let result = list.filter(function (e) {
    return e.duration >= low && e.duration <= high
});
console.log(result);
return result;

  

}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  console.log(categoryList)


let result = list.filter( x => categoryList.includes(x.category));
return result;


  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on their Category and return filtered list

}


// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together
function filterFunction(list, filters) {
  console.log(filters)
   let filteredList = [];

if(filters.category.length > 0 && filters.duration.length > 0){
  let low=filters.duration.split("-")[0]
  let high=filters.duration.split("-")[1]
  filteredList=filterByDuration(list, parseInt(low), parseInt(high))
  filteredList = filterByCategory(filteredList, filters.category );

}
else if(filters.category.length > 0){
  filteredList = filterByCategory(list, filters.category );
}
else if(filters.duration.length > 0) {
  let low=filters.duration.split("-")[0]
  let high=filters.duration.split("-")[1]
  filteredList =filterByDuration(list, parseInt(low), parseInt(high));
}
else { 
  return list
}
 return filteredList;
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage
  
  localStorage.setItem("filters", JSON.stringify(filters));

  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object

  
  let data=JSON.parse(localStorage.getItem("filters"));
  // Place holder for functionality to work in the Stubs
  return data;
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills
  let cat = document.getElementById("category-list");
  
 
  filters.category.forEach((element)=> { 
    let newele = document.createElement("div");
    newele.setAttribute("class","category-filter");
    newele.textContent = element;
    cat.append(newele);

  
  });





}
export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
};
