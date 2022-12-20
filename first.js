function modeDarkLight(){
    let mybody = document.body;
    mybody.classList.toggle("myDark");
    
}
function show(res){
    document.getElementById("result").value+= res;
}
function erase(){
    
    document.getElementById("result").value = "";
}
function equals(){
    let res = document.getElementById("result").value;
    let final = eval(res);
    
    document.getElementById("result").value = final;
}

