let firstInput = document.createElement("input");
let secondInput = document.createElement("input");
let button = document.createElement("button");
button.innerHTML = "Calculate";

window.addEventListener('load', (event) => {
    document.body.appendChild(firstInput);
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(secondInput);  
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(button);
});

function calculate() {
    if(document.getElementById("result")){
        document.getElementById("result").remove();
    }
    
    if(document.getElementsByClassName("error-mesage")){
        let elements = document.querySelectorAll(".error-mesage");
        for(let i=0; i<elements.length; i++) { 
            elements[i].remove();
        }
    }

    let error = document.createElement("div");
    error.className = "error-mesage";
    error.innerHTML = "Это не число";

    if(firstInput.value.match(/,/)) {
        firstInput.value = firstInput.value.replace(/,/g, '.');
    }
	
	if(secondInput.value.match(/,/)) {
        secondInput.value = secondInput.value.replace(/,/g, '.');
    }

    if(!firstInput.value.match(/^[0-9\.]+$/) && !secondInput.value.match(/^[0-9\.]+$/)){
        firstInput.parentNode.insertBefore(error, firstInput.nextSibling);
        secondInput.parentNode.insertBefore(error.cloneNode(true), secondInput.nextSibling);
    }

    else if (!firstInput.value.match(/^[0-9\.]+$/)){
        firstInput.parentNode.insertBefore(error, firstInput.nextSibling);
    }

    else if (!secondInput.value.match(/^[0-9\.]+$/)){
        secondInput.parentNode.insertBefore(error, secondInput.nextSibling);
    }

    else {
        let result = document.createElement("div");
        result.setAttribute("id", "result");
        result.innerHTML = `${+firstInput.value + +secondInput.value}`;
        button.parentNode.insertBefore(result, button.nextSibling);
    }
}
button.onclick = calculate;
