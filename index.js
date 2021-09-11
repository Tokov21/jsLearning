const button1 = document.querySelector("#button1");

button1.innerHTML = `Ky
<div>Privet</div>
<p>Vot eto prkiol</p>`;

button1.style.backgroundColor = "aqua";
button1.style.border = "2px solid blue";

const body = document.querySelector("body");
body.innerHTML = `<div id="newDiv">
<ul>
    <li>
        <li>test 1</li>
    </li>
    <li>
        <li>test 2</li>
    </li>
    <li>
        <li>test 3</li>
    </li>
</ul>
</div>`;

const lis = document.getElementsByTagName("li");
const lis1 = document.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
    lis[i].classList.add("italic");
}

for (let i = 0; i < lis1.length; i++) {
    lis1[i].style.color = "red";
}

console.log(lis);
console.log(lis1);

const span = document.createElement("span");

span.textContent = "I am new span";
span.classList.add("span");

body.appendChild(span);

for (let i = 0; i < 3; i++) {
    const div = document.createElement("div");
    div.textContent = `divElem${i}`;
    div.id = `divElem${i}`;
    body.appendChild(div);
}
