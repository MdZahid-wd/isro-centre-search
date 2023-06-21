const buttons = document.querySelectorAll(".filterBtns-div>button");
const input = document.querySelector(".searchBox>input");
const searchBtn = document.querySelector(".searchBtn");
const result = document.querySelector(".result");

buttons.forEach((button) => {
  button.addEventListener("click", (el) => {
    activateBtn(el);
  });
});

let active = "";
function activateBtn(el) {
  if (el.target && !el.target.classList.contains("activate")) {
    if (document.querySelector(".activate")) {
      document.querySelector(".activate").classList.remove("activate");
    }
    el.target.classList.add("activate");
    active = el.target.classList[0];
  } else {
    el.target.classList.remove("activate");
    active = "";
    input.value = "";
    result.innerHTML = "";
    result.innerHTML = defaultElement();
  }
}

searchBtn.addEventListener("click", (e) => {
  if (active === "") {
    alert("Please select place or city or name.");
    return;
  }
  if (input.value === "") {
    alert("Please enter something.");
    return;
  }
  const searchValue = input.value;
  const searchKey = document.querySelector(".activate").innerHTML;

  if (searchKey == "CITY") {
    let searchOutput = centers.filter((el) => {
      return el.Place.toLowerCase() == `${searchValue}`;
    });
    createResult(searchOutput);
  } else if (searchKey == "STATE") {
    let searchOutput = centers.filter((el) => {
      return el.State.toLowerCase() == `${searchValue}`;
    });
    createResult(searchOutput);
  } else if (searchKey == "CENTER") {
    let searchOutput = centers.filter((el) => {
      return el.name == `${searchValue}`;
    });
    createResult(searchOutput);
  }
});
function createResult(searchOut) {
  for (let j = 0; j < result.length; j++) {
    result.removeChild(result.firstChild);
  }
  let allElements = "";
  for (let i = 0; i < searchOut.length; i++) {
    allElements += createEl(searchOut[i]);
  }
  result.innerHTML = allElements;
}

function createEl(el) {
  console.log(el.name);
  let ele = `<div class="searchItems"><div class="center"><h4>CENTER</h4><p>${el.name}</p></div><div class="city"><h4>CITY</h4><p>${el.Place}</p>
    </div>
    <div class="state">
        <h4>STATE</h4>
        <p>${el.State}</p>
    </div>
</div>`;
  return ele;
}

window.onload = () => {
  result.innerHTML = defaultElement();
};
function defaultElement() {
  let el = "";
  for (let i = 0; i < defaultItems.length; i++) {
    el += createEl(defaultItems[i]);
  }
  return el;
}
const defaultItems = [
  {
    id: 1,
    name: "Semi-Conductor Laboratory (SCL)",
    Place: "Chandigarh",
    State: "Punjab/Haryana",
  },
  { id: 2, name: "Western RRSC", Place: "Jodhpur", State: "Rajasthan" },
  { id: 3, name: "Solar Observatory", Place: "Udaipur", State: "Rajasthan" },
  {
    id: 4,
    name: "Space Applications Centre (SAC)",
    Place: "Ahmedabad",
    State: "Gujarat",
  },
];
const centers = [
  {
    id: 1,
    name: "Semi-Conductor Laboratory (SCL)",
    Place: "Chandigarh",
    State: "Punjab/Haryana",
  },
  { id: 2, name: "Western RRSC", Place: "Jodhpur", State: "Rajasthan" },
  { id: 3, name: "Solar Observatory", Place: "Udaipur", State: "Rajasthan" },
  {
    id: 4,
    name: "Space Applications Centre (SAC)",
    Place: "Ahmedabad",
    State: "Gujarat",
  },
  {
    id: 5,
    name: "Physical Research Laboratory (PRL)",
    Place: "Ahmedabad",
    State: "Gujarat",
  },
  {
    id: 6,
    name: "Development and Educational Communication Unit (DECU)",
    Place: "Ahmedabad",
    State: "Gujarat",
  },
  { id: 7, name: "Infrared Observatory", Place: "Mt.Abu", State: "Rajasthan" },
  {
    id: 8,
    name: "Master Control Facility-B (MCF)",
    Place: "Bhopal",
    State: "Madhya Pradesh",
  },
  { id: 9, name: "ISRO Liaison Office", Place: "Mumbai", State: "Maharashtra" },
  {
    id: 10,
    name: "Indian Deep Space Network (IDSN)",
    Place: "Byalalu",
    State: "Karnataka",
  },
  {
    id: 11,
    name: "Indian Space Science Data Centre (ISSDC)",
    Place: "Byalalu",
    State: "Karnataka",
  },
  {
    id: 12,
    name: "Master Control Facility (MCF)",
    Place: "Hassan",
    State: "Karnataka",
  },
  {
    id: 13,
    name: "Ammonium Perchlorate Experimental Plant",
    Place: "Aluva",
    State: "Kerala",
  },
  { id: 14, name: "Space Commission", Place: "Bengaluru", State: "Karnataka" },
  {
    id: 15,
    name: "Department of Space and ISRO Headquarters",
    Place: "Bengaluru",
    State: "Karnataka",
  },
  {
    id: 16,
    name: "INSAT Programme Office",
    Place: "Bengaluru",
    State: "Karnataka",
  },
  { id: 17, name: "NNRMS Secretariat", Place: "Bengaluru", State: "Karnataka" },
  {
    id: 18,
    name: "Civil Engineering Programme Office",
    Place: "Bengaluru",
    State: "Karnataka",
  },
  {
    id: 19,
    name: "Antrix Corporation",
    Place: "Bengaluru",
    State: "Karnataka",
  },
  {
    id: 20,
    name: "U R Rao Satellite Centre (URSC)",
    Place: "Bengaluru",
    State: "Karnataka",
  },
  {
    id: 21,
    name: "Laboratory for Electro-Optical Systems (LEOS)",
    Place: "Bengaluru",
    State: "Karnataka",
  },
  {
    id: 22,
    name: "ISRO Telemetry, Tracking and Command Network (ISTRAC)",
    Place: "Bengaluru",
    State: "Karnataka",
  },
  { id: 23, name: "Southern RRSC", Place: "Bengaluru", State: "Karnataka" },
  {
    id: 24,
    name: "Liquid Propulsion Systems Centre (LPSC)",
    Place: "Bengaluru",
    State: "Karnataka",
  },
  {
    id: 25,
    name: "Human Space Flight Centre (HSFC)",
    Place: "Bengaluru",
    State: "Karnataka",
  },
  {
    id: 26,
    name: "New Space India Limited (NSIL)",
    Place: "Bengaluru",
    State: "Karnataka",
  },
  {
    id: 27,
    name: "New Space India Limited (NSIL)",
    Place: "New Delhi",
    State: "Delhi",
  },
  { id: 28, name: "ISRO Branch Office", Place: "New Delhi", State: "Delhi" },
  { id: 29, name: "Delhi Earth Station", Place: "New Delhi", State: "Delhi" },
  {
    id: 30,
    name: "Indian Institute of Remote Sensing (IIRS)",
    Place: "Dehradun",
    State: "Uttarakand",
  },
  {
    id: 31,
    name: "Centre for Space Science and Technology Education in Asia-Pacific (CSSTEAP)",
    Place: "Dehradun",
    State: "Uttarakand",
  },
  {
    id: 32,
    name: "ISTRAC Ground Station",
    Place: "Lucknow",
    State: "Uttar Pradesh",
  },
  { id: 33, name: "Eastern RRSC", Place: "Kolkata", State: "West Bengal" },
  {
    id: 34,
    name: "North Eastern Space Application Centre (NE-SAC)",
    Place: "Shillong",
    State: "Meghalaya",
  },
  { id: 35, name: "Central RRSC", Place: "Nagpur", State: "Maharashtra" },
  {
    id: 36,
    name: "National Remote Sensing Centre (NRSC)",
    Place: "Hyderabad",
    State: "Telangana",
  },
  {
    id: 37,
    name: "National Atmospheric Research Laboratory (NARL)",
    Place: "Tirupati",
    State: "Andhra Pradesh",
  },
  {
    id: 38,
    name: "Down Range Station",
    Place: "Port Blair",
    State: "Andaman and Nicobar",
  },
  {
    id: 39,
    name: "Satish Dhawan Space Centre (SDSC), SHAR",
    Place: "Sriharikota",
    State: "Andhra Pradesh",
  },
  {
    id: 40,
    name: "ISRO Propulsion Complex",
    Place: "Mahendragiri",
    State: "Tamil Nadu",
  },
  {
    id: 41,
    name: "Vikram Sarabhai Space Centre (VSSC)",
    Place: "Thiruvananthapuram",
    State: "Kerala",
  },
  {
    id: 42,
    name: "Liquid Propulsion Systems Centre (LPSC)",
    Place: "Thiruvananthapuram",
    State: "Kerala",
  },
  {
    id: 43,
    name: "ISRO Inertial Systems Unit (IISU)",
    Place: "Thiruvananthapuram",
    State: "Kerala",
  },
  {
    id: 44,
    name: "Indian Institute of Space Science and Technology (IIST)",
    Place: "Thiruvananthapuram",
    State: "Kerala",
  },
];
