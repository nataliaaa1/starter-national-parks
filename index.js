const submitHandler = (event) => {
    console.log("The form was submitted");
  };
  const main = () => {
    // Get the form element
    const form = document.querySelector("#park-form");
  
    // Attach the submit handler
    form.addEventListener("submit", submitHandler);
  };
  window.addEventListener("DOMContentLoaded", main);
  const submitHandler = (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
  };
  // If there are no errors
if (!Object.keys(errors).length) {
    // Create a new element
    const parkSection = document.createElement("section");
  
    // Add the park class
    parkSection.classList.add("park-display");
  
    // Construct the HTML for this element
    const content = `
      <h2>${formData.get("name")}</h2>
      <div class="location-display">${formData.get("location")}</div>
      <div class="description-display">${formData.get("description")}</div>
      <button class="rate-button" title="Add to Favourites">&#9734;</button>
      <div class="stats">
        <div class="established-display stat">
          <h3>Established</h3>
          <div class="value">${moment(formData.get("established")).format(
            "MMMM D, YYYY"
          )}</div>
        </div>
        <div class="area-display stat">
          <h3>Area</h3>
          <div class="value">${formData.get("area")}</div>
        </div>
        <div class="rating-display stat">
          <h3>Rating</h3>
          <div class="value">${formData.get("rating")}</div>
        </div>
      </div>
      `;
  
    // Set the innerHTML
    parkSection.innerHTML = content;
  
    // Append to the main element
    document.querySelector("main").appendChild(parkSection);
  }
  const renderOnePark = (park) => {
    // Get the individual properties of the park
    const { name, location, description, established, area, rating } = park;
  
    const content = `
        <section class="park-display">
          <h2>${name}</h2>
          <div class="location-display">${location}</div>
          <div class="description-display">${description}</div>
          <button class="rate-button" title="Add to Favourites">&#9734;</button>
          <div class="stats">
            <div class="established-display stat">
              <h3>Established</h3>
              <div class="value">${established}</div>
            </div>
            <div class="area-display stat">
              <h3>Area</h3>
              <div class="value">${area}</div>
            </div>
            <div class="rating-display stat">
              <h3>Rating</h3>
              <div class="value">${rating}</div>
            </div>
          </div>
        </section>
    `;
    return content;
  };
  const render = () => {
    // Get the parent element
    const main = document.querySelector("main");
  
    // Empty the parent element
    main.innerHTML = "";
  
    // Get the parks HTML
    const content = parks.map(renderOnePark).join("");
  
    // Set the `innerHTML` of parent element
    main.innerHTML = content;
  };