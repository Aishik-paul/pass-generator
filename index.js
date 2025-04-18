let input = document.querySelector("#input");
let criteria = document.querySelectorAll(".criteria");
let generate = document.querySelector("#generate");
let length = document.querySelector("#length");

let complexity = {
    character: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+[]{}|;:,.<>?",
};




generate.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    
    let passwordLength = parseInt(length.value) || 8;
    let passwordAll = "";

    criteria.forEach((choice) => {
        if (choice.checked) {
            if (choice.name === "Uppercase") {
                console.log("name: ", complexity.character.toUpperCase());
                passwordAll += complexity.character.toUpperCase();
            }

            if (choice.name === "Lowercase") {
                console.log("name: ", complexity.character);
                passwordAll += complexity.character;
            }

            if (choice.name === "Number") {
                console.log("name: ", complexity.numbers);
                passwordAll += complexity.numbers;
            }

            if (choice.name === "Symbol") {
                console.log("name: ", complexity.symbols);
                passwordAll += complexity.symbols;
            }
        }
    });

    if (passwordAll === "") {
        alert("Please select at least one checkbox!");
        return;
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * passwordAll.length);
        password += passwordAll[randomIndex];
    }

    console.log("Final password: ", password);
    input.value = password;
});

