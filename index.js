let num = 0;

const valueEl = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const style = event.currentTarget.classList;
        console.log(style);
        if(style.contains("btn-danger")){
            num--;
        }
        else if(style.contains("btn-success")){
            num++;
        }
        else{
            num = 0;
        }
        valueEl.textContent = num;
        if(num<0){
            valueEl.style.color = "red";
        }
        else if(num>0){
            valueEl.style.color = "green";
        }
        else{
            valueEl.style.color = "black";
        }

    });
});

