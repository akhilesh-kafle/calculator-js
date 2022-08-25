var display = document.getElementById("display")

var buttons = Array.from(document.getElementsByClassName("button"))
console.log(buttons)

buttons.map( button=>{
    button.addEventListener("click",(e)=>{
        switch(e.target.innerText){
            case "AC":
                display.innerText = "";
                break;
            case "DEL":
                if (display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }
                console.log("pressed")
                break;
            
            case "=":
                try{
                    display.innerText = eval(display.innerText)
                    break;
                }catch{
                    display.innerHTML = "error"
                }
                
            default:
                display.innerText  += e.target.innerText;
        }
    })
})