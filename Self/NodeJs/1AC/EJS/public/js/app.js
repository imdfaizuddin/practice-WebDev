let btns = document.querySelectorAll("button");

for(btn of btns){
    btn.addEventListener("click", ()=>{
        alert("button clicked");
        console.log("button was clicked");
    });
}