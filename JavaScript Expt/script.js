// Expt 1
document.getElementById('Expt1').addEventListener('click', function() {
    document.querySelector('.view-space').innerHTML = '';

    var calculator = document.createElement('div');
    calculator.innerHTML = `
    <h1>Basic calculator for arithmetic operations:</h1><br><br>
    <div class="calculator">
        <input type="text" placeholder="0" id="display" readonly>
        <button onclick="Clear()">Clr</button>
        <button onclick="del()">Del</button>
        <button onclick="display('%')">%</button>
        <button onclick="display('/')">/</button>
        <button onclick="display('7')">7</button> 
        <button onclick="display('8')">8</button> 
        <button onclick="display('9')">9</button> 
        <button onclick="display('*')">*</button> 
        <button onclick="display('4')">4</button> 
        <button onclick="display('5')">5</button> 
        <button onclick="display('6')">6</button> 
        <button onclick="display('-')">-</button> 
        <button onclick="display('1')">1</button> 
        <button onclick="display('2')">2</button> 
        <button onclick="display('3')">3</button> 
        <button onclick="display('+')">+</button>
        <button onclick="display('.')">.</button>
        <button onclick="display('0')">0</button> 
        <button onclick="calculate()" id="equal">=</button>
        </div><br><br><br>

    <h1>Enter anything for concatenation</h1>
    <input type="text" placeholder="Enter word" id="val1">
    <input type="text" placeholder="Enter word" id="val2"><br><br>
    <button onclick="concat()">Concat</button><br><br>
    <p id="result" style="font-size:18pt"></p>
    `;
    
    document.querySelector('.view-space').appendChild(calculator);
});

function display(num) {
    document.getElementById("display").value += num;
}

function calculate() {
    let outputscreen = document.getElementById("display");
    try {
        outputscreen.value = eval(outputscreen.value);
    } catch(err) {
        alert("Invalid Expression");
    }
}

function Clear() {
    document.getElementById("display").value = "";
}

function del() {
    let outputscreen = document.getElementById("display");
    outputscreen.value = outputscreen.value.slice(0, -1);
}

function concat() {
    let val1 = document.getElementById("val1").value;
    let val2 = document.getElementById("val2").value;
    var p = document.getElementById("result");
    p.innerHTML = val1 + val2;
}

//Expt-2
document.getElementById('Expt2').addEventListener('click', function() {
    document.querySelector('.view-space').innerHTML = '';
    var game = document.createElement('div');
    game.innerHTML = `
    <h1>Number Guessing Game</h1>
    <input type="number" id="guessInput" placeholder="Enter your guess (1-100)">
    <button id="guessButton" onclick="numberGame()">Guess</button>
    <button id="restartButton" onclick="restartGame()">Restart</button>
    <p id="message"></p>
    `;
    document.querySelector('.view-space').appendChild(game);

});

let randomNumber = Math.floor(Math.random() * 100) + 1; 

let attempts = 0; 

function numberGame() {
    let guess = parseInt(document.getElementById('guessInput').value);
    let message = document.getElementById('message');
    let congrats = document.createElement('p');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.innerText = "Please enter a valid number between 1 and 100.";
        message.style.color = "red";
    } else {
        attempts++;

        if (guess < randomNumber) {
            message.innerText = "Too low! Try again.";
            message.style.color = "orange";
        } else if (guess > randomNumber) {
            message.innerText = "Too high! Try again.";
            message.style.color = "orange";
        } else {
            congrats.innerText = `Congratulations! You've guessed the number ${randomNumber} correctly in ${attempts} attempt(s).`;
            congrats.id = "congratulation";
            message.innerHTML = '';
            message.appendChild(congrats);
            document.getElementById('guessButton').setAttribute('disabled', 'disabled');
        }
    }
}

function restartGame() {
    document.getElementById('message').innerText = '';
    document.getElementById('guessButton').removeAttribute('disabled');
    document.getElementById('guessInput').value = '';
    randomNumber = Math.floor(Math.random() * 100) + 1; 
    console.log(randomNumber);
    attempts = 0; 
}

//Expt-3
document.getElementById("Expt3").addEventListener('click', function() {
    document.querySelector('.view-space').innerHTML = '';

    var factorialContainer = document.createElement('div');
    factorialContainer.innerHTML = `
    <h1>Find Factorial</h1>
    <input type="number" id="numForFactorial" placeholder="Enter any number">
    <button id="findFactorial" onclick="calculateFactorial()">Calculate</button>
    <p id="message"></p>
    `;

    document.querySelector('.view-space').appendChild(factorialContainer);
});

function calculateFactorial() {
    let num = parseInt(document.getElementById('numForFactorial').value);

    const calculateFactorial = function(num) {
        if (num === 0 || num === 1) {
            return 1;
        } else {
            return num * calculateFactorial(num - 1); 
        }
    };

    let message = document.getElementById('message');
    if(num < 0)
    {
        alert("Number cannot be negative");
    }
    else{
        message.innerHTML = `The Factorial of ${num} is ${calculateFactorial(num)}`;
    }   
}

//Expt-4
document.getElementById('Expt4').addEventListener('click', function(){
    document.querySelector('.view-space').innerHTML = '';
    var dom = document.createElement('div');
    dom.innerHTML = `
    <div class="dom-container">
    <h1 id="content">Welcome to the 3rd experiment</h1>
    <button class="btn" onclick="changeText()">Change Text</button>
    <input type="text" id="newItem" placeholder="Enter item name">
    <ul id="myList">
    </ul>
    <button class="btn" onclick="addItem()">Add Item</button>
    <div id="myElement">Visible Element</div>
    <button class="btn" onclick="toggleVisibility()">Toggle Visibility</button>
    </div>
    `;
    document.querySelector('.view-space').appendChild(dom);
});
    
let clickCount = 0;
const textOptions = [
    "Welcome to the 4th experiment",
    "This is JavaScript 4th experiment"
];

function changeText() {
    clickCount++;
    const content = document.getElementById('content');
    const newText = clickCount % 2 === 0 ? textOptions[0] : textOptions[1];
    content.innerText = newText;
}

function addItem() {
    const newItemName = document.getElementById('newItem').value;
    if (newItemName.trim() !== '') {
        const newListElement = document.createElement('li');
        newListElement.innerText = newItemName;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function() {
            this.parentNode.remove();
        };
        newListElement.appendChild(deleteButton);

        document.getElementById('myList').appendChild(newListElement);
        document.getElementById('newItem').value = ''; 
    }
}

function toggleVisibility() {
    var element = document.getElementById('myElement');
    if (element.style.display === 'none') {
        element.style.display = 'block'; 
    } else {
        element.style.display = 'none'; 
    }
}

//Expt-5
document.getElementById("Expt5").addEventListener('click',function(){
    document.querySelector('.view-space').innerHTML = '';

    var five = document.createElement('div');
    five.innerHTML = `
        <div class="form-container">
        <h1 id="form-title">Register Form</h1>
        <form id="registerForm" onsubmit="return validateForm()">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        
            <label for="age">Age:</label>
            <input type="text" id="age" name="age" required pattern="[0-9]{1,3}">

            <label for="college">College:</label>
            <input type="text" id="college" name="college" required>

            <label>Gender:</label>
            <input type="radio" id="male" name="gender" value="male" required>
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label>

            <label for="branch">Branch:</label>
            <input type="text" id="branch" name="branch" required>

            <label for="course">Course:</label>
            <select id="course" name="course" required>
                <option value="">Select Course</option>
                <option value="Engineering">Engineering</option>
                <option value="Medical">Medical</option>
                <option value="Management">Management</option>
                <option value="Arts">Arts</option>
            </select>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required minlength="6">

            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required>

            <label for="phone">Phone:</label>
            <input type="text" id="phone" name="phone" required pattern="[0-9]{10}">

            <input type="submit" value="Submit">
        </form>
    </div>
    `;
    document.querySelector('.view-space').appendChild(five);
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const college = document.getElementById('college').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const branch = document.getElementById('branch').value.trim();
    const course = document.getElementById('course').value;
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const dob = document.getElementById('dob').value;
    const phone = document.getElementById('phone').value.trim();

    if (!name || !age || !college || !gender || !branch || !course || !email || !password || !dob || !phone) {
        alert('All fields are required!');
        return false;
    }

    if (!/^\d+$/.test(age)) {
        alert('Age must be a number!');
        return false;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert('Phone number must be 10 digits!');
        return false;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return false;
    }

    const formData = {
        name: name,
        age: age,
        college: college,
        gender: gender ? gender.value : '',
        branch: branch,
        course: course,
        email: email,
        password: password,
        dob: dob,
        phone: phone
    };

    let studentData = localStorage.getItem('studentData') ? JSON.parse(localStorage.getItem('studentData')) : [];
    studentData.push(formData);
    localStorage.setItem('studentData', JSON.stringify(studentData));

    alert('Your response is submitted!');
    document.getElementById('registerForm').reset();
    return false;
}

let x = 0;
let y = 0;
document.addEventListener('keydown', function(event) {
    const container = document.querySelector('.form-container');
    switch(event.key) {
        case 'ArrowUp':
            y -= 10;
            break;
        case 'ArrowDown':
            y += 10;
            break;
        case 'ArrowLeft':
            x -= 10;
            break;
        case 'ArrowRight':
            x += 10;
            break;
    }
    container.style.transform = `translate(${x}px, ${y}px)`;
});

// Expt-6
document.getElementById('Expt6').addEventListener('click', function() {
    document.querySelector('.view-space').innerHTML = '';

    var storage = document.createElement('div');
    storage.innerHTML = `
        <div>
            <h2>Students List:</h2>
            <ul id="studentList"></ul>
        </div>
        <div id="studentDetails"></div>
    `;
    
    document.querySelector('.view-space').appendChild(storage);

    this.onload =  retrieveAndDisplayData();
});

function retrieveAndDisplayData() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';
    const storedData = localStorage.getItem('studentData');
    if (storedData) {
        const studentData = JSON.parse(storedData);
        studentData.forEach((student, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${student.name} - ${student.college}`;
            listItem.setAttribute('data-index', index);
            listItem.addEventListener('click', displayStudentDetails);
            studentList.appendChild(listItem);
        });
    }
}

function displayStudentDetails(event) {
    const index = event.target.getAttribute('data-index');
    const storedData = localStorage.getItem('studentData');
    if (storedData) {
        const studentData = JSON.parse(storedData);
        const student = studentData[index];
        const studentDetailsDiv = document.getElementById('studentDetails');
        studentDetailsDiv.innerHTML = `
            <h2>Student Details:</h2>
            <div>
                <p><strong>Name:</strong> ${student.name}</p>
                <p><strong>Age:</strong> ${student.age}</p>
                <p><strong>College:</strong> ${student.college}</p>
                <p><strong>Gender:</strong> ${student.gender}</p>
                <p><strong>Branch:</strong> ${student.branch}</p>
                <p><strong>Course:</strong> ${student.course}</p>
                <p><strong>Email:</strong> ${student.email}</p>
                <p><strong>Date of Birth:</strong> ${student.dob}</p>
                <p><strong>Phone:</strong> ${student.phone}</p>
            </div>
            <button class="clearButton" onclick="clearStudent(${index})">Clear Student</button>
        `;
    }
}

function clearStudent(index) {
    let studentData = localStorage.getItem('studentData') ? JSON.parse(localStorage.getItem('studentData')) : [];
    studentData.splice(index, 1);
    localStorage.setItem('studentData', JSON.stringify(studentData));
    retrieveAndDisplayData();
    const studentDetailsDiv = document.getElementById('studentDetails');
    studentDetailsDiv.innerHTML = '';
}

document.getElementById('Expt7').addEventListener('click',function(event){
    fetch('file.json')
    .then(response => response.json())
    .then(data=> {
        data.forEach(item => {
            console.log(item.name);
        });
    })
    .catch(err => console.error(err));
});