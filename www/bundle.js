let formState = {
    name: {
        value: '',
        validation: ['REQUIRED']
    },
    email: {
        value: '',
        validation: ['REQUIRED', 'EMAIL_VALIDATION']
    },
    type: {
        value: '',
        validation: ['REQUIRED']
    },
    password: {
        value: '',
        validation: ['REQUIRED', 'MIN_CHAR_8']
    }
}
let inputBoxes = document.querySelectorAll(".input--box");

let formOnChange = (event) => {
    formState[event.target.name].value = event.target.value;
    padLabel()
}

let changeClass = (event) => {
    let el = document.querySelector("#password")
    if (event.target.classList.value !== "fas fa-eye-slash") {
        event.target.classList.value = "fas fa-eye-slash"
        el.setAttribute("type", "text")
    } else {
        event.target.classList.value = "fas fa-eye"
        el.setAttribute("type", "password")
    }
}

let checkValues = (input) => {
    let d = []
    for (const key in formState) {
        if (formState.hasOwnProperty(key)) {
            const element = formState[key].value;
            if (element !== "" && key === input) {
                return true
            } else {
                d.push({
                    el: key,
                    st: false
                })
            }
        }
    }
    return d
}

let padLabel = () => {
    inputBoxes.forEach(input => {
        if (input.querySelector("input") !== null) {
            let e = input.querySelector("label")
            if (checkValues(input.querySelector("input").getAttribute("name"))) {
                e.style.marginTop = "-51px";
                e.style.zIndex = "1";
                e.style.marginLeft = "5px";
                e.style.fontSize = "11px";
            } else {
                e.style.marginTop = "-30px";
                e.style.zIndex = "-1";
                e.style.marginLeft = "10px";
                e.style.fontSize = "13px";
            }
        }
    })
}

let isValidEmail = (mail) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) ? true : false


let formSubmit = (event) => {
    event.preventDefault()
    let c = checkValues("name")
}

window.onload = () => {
    if (document.readyState === 'complete') {
        padLabel()
    }
}