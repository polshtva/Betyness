let input = document.querySelectorAll(".form input")
let icon = document.querySelectorAll(".form form__form__icon")
input.forEach(el => {
    el.addEventListener("input", e => {
        icon.forEach(i => {
            i.style.display = none;
        })
        input.style.paddingLeft = "0px";
    })
})