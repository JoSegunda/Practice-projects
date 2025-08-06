const calculateButton = document.querySelector("#submit")

calculateButton.addEventListener('click', (e)=>{
    e.preventDefault();

    const num1 = document.querySelector("#num1");
    const num2 = document.querySelector("#num2");
    const tbh2 = document.getElementById("sp");

    tbh2.innerText = num1.value;

    if (num1.value < 0 || num2.value < 0) {
        window.alert("Insira um número válido");
        return;
    }
    
    Calculate(num1.value, num2.value);
    

    
    
});

function Calculate(num1, num2) {
    let show = document.querySelector("#tabs")
    show.innerHTML = "";

    for (let i = 1; i <= num2; i++) {
        const newP = document.createElement('p');
        newP.textContent = num1+" x "+i+" = "+(i*num1);
        newP.style.color = 'black';
        document.div;tabs.appendChild(newP);
    }
}

/**
 for(let i = 1; i <= num2; i++){
    const template = `<div class="row">
    <div class="operation">${num1} x ${i} = </div>
    <div class="result">${result}</div>
    </div>`;

    const parser = new DOMParser()
    const htmltemplate = parser.parseFromString(template, "text/html")

    const row = htmlTemplate.querySelector(".row")
    multiplicationTable.appendChild(row)
 }
 */