// Define car data
const cars = [
    {
      name: "Toyota Camry",
      image: "https://www.toyota.com.sg/showroom/new-models/-/media/2029a2dfd4d34f728a7cef8a10182ffc.png",
      price: "$25,000",
      details: "The Toyota Camry is a trusted choice for drivers worldwide. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices posuere neque, eu aliquet turpis fermentum in. Aliquam id erat eget velit vulputate lacinia."
    },
    {
      name: "Honda Civic",
      image: "https://www.honda.es/content/dam/central/cars/civic-hybrid/overview-v3/Honda-civic-hybrid-15-16x9.png/_jcr_content/renditions/c1.png",
      price: "$22,000",
      details: "The Honda Civic is known for its reliability and efficiency. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices posuere neque, eu aliquet turpis fermentum in. Aliquam id erat eget velit vulputate lacinia."
    },
    {
      name: "Ford Mustang",
      image: "https://www.ford.cl/content/ford/cl/es_cl/home/performance/mustang-mach-1/jcr:content/par/common_box_2089121222/generalParsys/image/image.imgs.full.high.jpg/1625843456595.jpg",
      price: "$35,000",
      details: "The Ford Mustang is an American classic with powerful performance. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices posuere neque, eu aliquet turpis fermentum in. Aliquam id erat eget velit vulputate lacinia."
    }
  ];
  
  // Function to display cars
  function displayCars() {
    const carList = document.getElementById("car-list");
    carList.innerHTML = "";
    cars.forEach((car, index) => {
      const carDiv = document.createElement("div");
      carDiv.classList.add("car");
      carDiv.innerHTML = `
        <img src="${car.image}" alt="${car.name}">
        <h2>${car.name}</h2>
        <p>${car.details} </p>
        <p><strong>Price:</strong> ${car.price}</p>
        <button class="button details-button-blue">Details</button>

            `;
      carList.appendChild(carDiv);
    });
  }
  
  // Function to show details of a car
  function showDetails(index) {
    const car = cars[index];
    const carName = document.getElementById("car-name");
    const carPrice = document.getElementById("car-price");
    const carDescription = document.getElementById("car-description");

    carName.textContent = car.name;
    carPrice.textContent = "Price: " + car.price;
    carDescription.textContent = car.details;

    // Show the details container
    const carDetails = document.getElementById("car-details");
    carDetails.classList.remove("hidden");
  }
  
  // Display cars on page load
  displayCars();
