const allNavOptions = document.querySelectorAll(".nav-options");
const loginBtns = document.querySelectorAll(".btn");
const formInputs = document.querySelectorAll(".form-input");
const allContentImgs = document.querySelectorAll(".content-img")

allNavOptions.forEach(option => {
    option.addEventListener('click', (index) => {
        allNavOptions.forEach(opt => {
            opt.classList.remove("nav-active")
        });
        option.classList.add("nav-active")
        
    });
});

// preventing default form submission behaviour
loginBtns.forEach(Btn=> {
    Btn.addEventListener('click', (event) => {
        event.preventDefault()
        formInputs.forEach(input => {
            input.value = ""
        });
    });
});