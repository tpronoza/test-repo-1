const hogwartsHouses = [
  {
    id: 1,
    name: "Gryffindor",
    logo: "/images/gryffindor_logo.jpeg",
  },
  {
    id: 2,
    name: "Slytherin",
    logo: "/images/slitherin_logo.jpeg",
  },
  {
    id: 3,
    name: "Hufflepuff",
    logo: "/images/hufflepuff_logo.jpeg",
  },
  {
    id: 4,
    name: "Ravenclaw",
    logo: "/images/ravenclaw_logo.jpg",
  },
];

const students = [
  {
    id: 1,
    name: "Harry Potter",
    hogwartsHouse: "Gryffindor",
    logo: "/images/gryffindor_logo.jpeg"
  },
  {
    id: 2,
    name: "Hermione Granger",
    hogwartsHouse: "Gryffindor",
    logo: "/images/gryffindor_logo.jpeg"
  },
  {
    id: 3,
    name: "Ron Weasley",
    hogwartsHouse: "Gryffindor",
    logo: "/images/gryffindor_logo.jpeg"
  },
  {
    id: 4,
    name: "Ginny Weasley",
    hogwartsHouse: "Gryffindor",
    logo: "/images/gryffindor_logo.jpeg"
  },
  {
    id: 5,
    name: "Fred Weasley",
    hogwartsHouse: "Gryffindor",
    logo: "/images/gryffindor_logo.jpeg"
  },
  {
    id: 6,
    name: "George Weasley",
    hohogwartsHouseuse: "Gryffindor",
    logo: "/images/gryffindor_logo.jpeg"
  },
  {
    id: 7,
    name: "Draco Malfoy",
    hogwartsHouse: "Slytherin",
    logo: "/images/slitherin_logo.jpeg"
  },
  {
    id: 8,
    name: "Luna Lovegood",
    hogwartsHouse: "Ravenclaw",
    logo: "/images/ravenclaw_logo.jpg"
  },
  {
    id: 9,
    name: "Neville Longbottom",
    hogwartsHouse: "Gryffindor",
    logo: "/images/gryffindor_logo.jpeg"
  },
  {
    id: 10,
    name: "Cho Chang",
    hogwartsHouse: "Ravenclaw",
    logo: "/images/ravenclaw_logo.jpg"
  },
  {
    id: 11,
    name: "Cedric Diggory",
    hogwartsHouse: "Hufflepuff",
    logo: "/images/hufflepuff_logo.jpeg"
  },
  {
    id: 12,
    name: "Albus Dumbledore",
    hogwartsHouse: "Gryffindor",
    logo: "/images/gryffindor_logo.jpeg"
  },
  {
    id: 13,
    name: "Tom Riddle",
    hogwartsHouse: "Slytherin",
    logo: "/images/slitherin_logo.jpeg"
  }
];

const expelledStudents = [];

const renderToDom = (divId, textToPrint) => {
  let selectedDiv = document.getElementById(divId);
  return (selectedDiv.innerHTML = textToPrint);
};


const sortButton = () => {
  document.getElementById("sort-button").addEventListener("click", buildForm);
};

const formClicked = () => {
  document.getElementById("sort-student").addEventListener("click", () => {
    studentName(); 
    buildStudentsList();
  }) 
}

const expelButtonClicked = () => {
  document.getElementById("students").addEventListener("click", expelStudent);
};


const buildStudentsList = (listOfStudents) => {
  let domString = "";
  console.log(listOfStudents)

  if(listOfStudents === undefined) {
  students.forEach((student) => {

    domString += `<div class="card m-3" style="width: 18rem;">`;
    domString += `<img src="${student.hogwartsHouse.logo}" class="card-img-top" alt="house">`;
    domString += `<div class="card-body student-card ${student.hogwartsHouse.name}">`;
    domString += ` <h1 class="card-title">${student.name}</h1>`;
    domString += `<p class="card-text">${student.hogwartsHouse.name}</p>`;
    domString += `<input type="hidden" id="${student.id}" name="custId" value="3487">`;
    domString += `<button type="button" class="btn btn-dark" id="${student.name}">EXPEL</button>`;
    domString += `</div>`;
    domString += `</div>`;
  }) } else {
    listOfStudents.forEach((s) => {
    domString += `<div class="card m-3" style="width: 18rem;">`;
    domString += `<img src="${student.hogwartsHouse.logo}" class="card-img-top" alt="house">`;
    domString += `<div class="card-body student-card ${student.hogwartsHouse.name}">`;
    domString += ` <h1 class="card-title">${student.name}</h1>`;
    domString += `<p class="card-text">${student.hogwartsHouse.name}</p>`;
    domString += `<input type="hidden" id="${student.id}" name="custId" value="3487">`;
    domString += `<button type="button" class="btn btn-dark" id="${student.name}">EXPEL</button>`;
    domString += `</div>`;
    domString += `</div>`;
  })
}

const sortingHat = () => {
  let domString = "";
  domString = 
  `
  
  `;
  renderToDom("#sortingHat", domString);
};

  renderToDom("students", domString);
  buildHouseColors();
  expelButtonClicked();
};

const buildHouseColors = () => {
  students.forEach((student) => {
      if (student.hogwartsHouse.name === 'Gryffindor'){
          document.querySelector('.Gryffindor').classList.add("Gryffindor");
      } else if (student.hogwartsHouse.name === 'Slytherin') {
          document.querySelector('.Slytherin').classList.add("Slytherin");
      } else if (student.hogwartsHouse.name === 'Hufflepuff'){
          document.querySelector('.Hufflepuff').classList.add("Hufflepuff");
      } else if (student.hogwartsHouse.name === 'Ravenclaw'){
          document.querySelector('.Ravenclaw').classList.add("Ravenclaw");
      }
  });
}

const studentName = () => {
  let studentName = document.getElementById("student").value;

  let sortingForm = document.getElementById("sorting-form");
  sortingForm.remove();

  let student = {
    name: studentName,
    hogwartsHouse: Object.assign(hogwartsHouses[studentHouse()]),
  };

  students.push(student);

};

const studentHouse = () => {
  return Math.floor(Math.random() * 4);
};

const expelStudent = (e) => {
  let student = e.target.id;
  let button = e.target.type;

  if (button === "button") {
    const studentsStillInSchool = students.filter((s) => s.name !== student);
    buildStudentsList(studentsStillInSchool);
  }  
  }

//     <div class="logo"><img src="https://cdn.shopify.com/s/files/1/0514/6332/3817/products/1219098_grande.png?v=1610550554" />
const initializingPage = () => {
  let domString = `

    <h1 class="display-4">Welcome to Hogwarts!</h1>
    <p class="lead">The famous Sorting Hat is one of the cleverest enchanted objects most witches and wizards will ever meet.</p>
    <p class="lead">If a student chooses to practice dark magic, click ‘expel’ to expel them from Hogwarts and add them to Voldemort’s army.</p>
    <hr class="my-4">
    <div class="form-floating mb-3">
    <input type="text" class="sortBtn form-control" id="sort-button" placeholder="SORT">
    <label for="sort-button">Enter Students Name</label>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button class="btn btn-primary" type="button">Let's the Magic Begin!!! </button>
    </div>
  </div>
    
    <!-- filter Buttons Row  -->
    <div id="filterButtons" class="d-flex justify-content-between mb-3 filterButtons">
      <button id="all-houses" class="btn btn-secondary w-100 m-1">All</button>
      <button id="gryffindor-house" class="btn btn-danger w-100 m-1">Gryffindor</button>
      <button id="hufflepuff-house" class="btn btn-warning w-100 m-1">Hufflepuff</button>
      <button id="ravenclaw- house" class="btn btn-info w-100 m-1">Ravenclaw</button>
      <button id="slytherin-house" class="btn btn-success w-100 m-1">Slytherin</button>
    </div>
  </div>
    `;

  printToDom("#sort-button", domString);
};

// BUTTON FILTER
// .filter() & .reduce() &.sort() - chaining
const filterButtons = (event) => {
  if(event.target.id.includes('all')) {
    renderCards(referenceList);
    console.log("sfhsdjkdfhskfhjkdsfhjksdfhksjdafhksdf");
  } if(event.target.id.includes('gryffindor')) {
    const gryffindor = referenceList.filter(item => item.house.toLowerCase() === 'gryffindor');
    renderCards(gryffindor);
  } if (event.target.id.includes('hufflepuff')) {
    const hufflepuff = referenceList.filter(item => item.house.toLowerCase() === 'hufflepuff');
    renderCards(hufflepuff);
  } if (event.target.id.includes('ravenclaw')) {
    const ravenclaw = referenceList.filter(item => item.house.toLowerCase() === 'ravenclaw');
    renderCards(ravenclaw);
  } if (event.target.id.includes('slytherin')) {
    const slytherin = referenceList.filter(item => item.house.toLowerCase() === 'slytherin');
    renderCards(slytherin);
  } if (event.target.id.includes('clearFilter')) {
    renderCards(referenceList);
  }
}

const startApp = () => {
  initializingPage();
  sortButton();

   // SELECT BUTTON ROW DIV
 document.querySelector('#filterButtons').addEventListener('click', filterButtons);

};



startApp();
