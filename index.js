const planets = [
    {
      planetName: "Sun",
      gravity: 27.9,
      image: "images/sun.png",
    },
    {
      planetName: "Moon",
      gravity: 0.1655,
      image: "images/moon.png",
    },
    {
      planetName: "Mercury",
      gravity: 0.377,
      image: "images/mercury.png",
    },
    {
      planetName: "Venus",
      gravity: 0.9032,
      image: "images/venus.png",
    },
    {
      planetName: "Earth",
      gravity: 1,
      image:"images/earth.png",
    },
    {
      planetName: "Mars",
      gravity: 0.3895,
      image: "images/mars.png",
    },
    {
      planetName: "Jupiter",
      gravity: 2.64,
      image: "images/jupiter.png",
    },
    {
      planetName: "Saturn",
      gravity: 1.139,
      image: "images/saturn.png",
    },
    {
      planetName: "Uranus",
      gravity: 0.917,
      image: "images/uranus.png",
    },
    {
      planetName: "Neptune",
      gravity: 1.148,
      image: "images/neptune.png",
    },
  ];

  planets.map((ele) => {
    const options = document.createElement("option");
    options.innerHTML = ele.planetName;
    options.value = ele.gravity;
    options.setAttribute("imageSrc", ele.image);

    const select = document.getElementById("selectPlanet");
    select.appendChild(options);
  });

  function calculate() {
    var mass = +document.getElementById("inputWeight").value;
    const select = document.getElementById("selectPlanet");

    var selectedIndex = select.selectedIndex;
    
    const selectedOption = select.options[selectedIndex];
    console.log(selectedOption);

    const gravity = +selectedOption.value;
    

    const weight = mass * gravity;
    

    const h1 = document.getElementById("h1");
    var error = "please enter your mass";
    if (mass == "") {
      h1.innerText = error;
    } else if (mass <= 0) {
      h1.innerText = "plz enter mass greater than 0";
    } else {
      h1.innerText = Math.abs(weight);
      var imgsrc = selectedOption.getAttribute("imageSrc");
      const img = document.getElementById("image");
      img.src = imgsrc;
    }
  }
