let uniUrl = "http://universities.hipolabs.com/search?country=";

let btn = document.querySelector("#btn");

let inputCountry = document.querySelector("#countryName");
let inputCollege = document.querySelector("#universityName");
let inputState = document.querySelector("#stateName");

btn.addEventListener("click", async () => {

    let uniNames = await getUniNames(inputCountry.value);
    let list = document.querySelector("#list");

    // console.log(uniNames);
    for (uni of uniNames) {
        let li = document.createElement("li");
        console.log(uni);

        if (uni.name == inputCollege.value) {
            console.log(uni);
            li.innerText = uni["state-province"];
            list.appendChild(li);
        }
        if (uni["state-province"] == inputState.value) {
            li.innerText = uni.name;
            list.appendChild(li);
        }
    }
});

inputCollege.addEventListener("input", function (){
    inputState.setAttribute("disabled", "");
    
});

inputState.addEventListener("input", ()=>{
    inputCollege.setAttribute("disabled", "");
});




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