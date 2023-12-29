function myfunction(){
    var x = document.getElementById("navv");
    if (x.className === "nav"){
        x.className += " responsive";
    }
    else {
        x.className = "nav";
    }
}