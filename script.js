const burger = document.querySelector(".hamburger")
const link = document.querySelectorAll(".links")
const linkCon = document.querySelector(".link-con")

console.log(link)


burger.addEventListener("click", () => {
    linkCon.classList.toggle("active")
})
    link.forEach(element => {
        element.addEventListener("click", () => {
            element.classList.remove("active")
        })
    });