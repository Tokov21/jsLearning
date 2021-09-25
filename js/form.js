const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    alert(event);
});

setTimeout(() => {
    alert("Reklama");
}, 60000);

setTimeout(() => {
    form.children[2].checked = "true";
}, 30000);
