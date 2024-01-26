const getColor = () => {
    // hex codes 

    const randomNumber = Math.floor(Math.random() * 1677215);
    console.log(randomNumber)
    const randomCode = "#" + randomNumber.toString(16);
    document.getElementById("color-code").innerText=randomCode;
    document.body.style.backgroundColor = randomCode;

}
document.getElementById("btn").addEventListener("click", getColor)

//fist call or inital call
getColor();