
const inputs = document.querySelectorAll('label');

function displayAnswer(){
    const classs = `${this.classList.value}s`;
    const value = this.innerHTML;
    console.log(value);
    if(value == "―"){
        document.getElementById(classs).classList.remove('click');
        this.innerHTML = "⏷"
    }else{
        document.getElementById(classs).classList.add('click');
        this.innerHTML = "―"
    }
}

inputs.forEach(input => input.addEventListener('click', displayAnswer));