let Switch = document.getElementById("Switch");
let bulb = document.getElementById("bulb");
// console.log(Switch, bulb);

let Value = 0
Switch.addEventListener("click", function () {
    // console.log("You have clicked");

    if (Value == 0) {
        Switch.innerHTML = "ON";
        bulb.style.backgroundColor = "yellow";
        Value = 1;
    }
    else {
        Switch.innerHTML = "OFF";
        bulb.style.backgroundColor = "white";
        Value = 0;
    }
})