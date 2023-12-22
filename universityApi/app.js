let uniUrl = "http://universities.hipolabs.com/search?country=";

let btn = document.querySelector("#btn");

let inputCountry = document.querySelector("#countryName");
let inputUni = document.querySelector("#universityName");
let inputState = document.querySelector("#stateName");
let clear = document.querySelector("#clr");

btn.addEventListener("click", async () => {

    let uniNames = await getUniNames(inputCountry.value);
    let list = document.querySelector("#list");

    // console.log(uniNames);
    for (uni of uniNames) {
        let li = document.createElement("li");
        // console.log(uni);

        if (uni.name == inputUni.value) {
            // console.log(uni);
            li.innerText = uni["state-province"];
            list.appendChild(li);
        }
        if (uni["state-province"] == inputState.value) {
            li.innerText = uni.name;
            list.appendChild(li);
        }
    }
});

// Disabling and Enabling input fields as per requirement.
inputUni.addEventListener("input", function () {
    inputState.setAttribute("disabled", "");
    inputState.setAttribute("placeholder", "");
    if (this.value == "") {
        inputState.removeAttribute("disabled");
        inputState.setAttribute("placeholder", "Enter State Name");
    }
});

inputState.addEventListener("input", function () {
    inputUni.setAttribute("disabled", "");
    inputUni.setAttribute("placeholder", "");

    if (this.value == "") {
        inputUni.removeAttribute("disabled");
        inputUni.setAttribute("placeholder", "Enter University Name");

    }
});



// Delete button implementation
clear.addEventListener("click", function(){
    deleteList();
});

function deleteList(){
    let list = document.querySelector("#list");

    let li = list.lastElementChild;
    while(li){
        list.removeChild(li);
        li = list.lastElementChild;
    }
}


// async funtion to get University list from API
async function getUniNames(country) {
    try {
        let uniNames = await fetch(uniUrl + country);
        let uniNamesObj = await uniNames.json();
        // console.log(uniNamesObj[0]["state-province"]);
        return uniNamesObj;

    } catch (error) {
        console.log("error: ", error);
    }
}