let dogUrl = 'https://dog.ceo/api/breeds/image/random';

let btn = document.querySelector("button");
let p = document.querySelector("#result")

// p.style.width = "600px";
// p.style.height = "400px";

btn.addEventListener("click", async ()=>{
    try {
        let link = await getDogPic();
    // p.innerHTML = `<img src = "${link}" alt= "dog pic">`;
        let img = document.querySelector("#dogImg");
        img.setAttribute("src", link);
    } catch (error) {
        console.log("error", error);
    }
    
});

async function getDogPic(){
    try {
        let res = await axios.get(dogUrl);
        // console.log(res);
        return res.data.message;
    } catch (error) {
        console.log("error -", error);
        return "Error pic not Found";
    }
}