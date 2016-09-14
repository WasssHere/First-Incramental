function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

var pandas = 0;
function onePanda(number) {
    pandas = pandas + number;document.getElementById("pandas").innerHTML = pandas;
};

var babypanda = 0;
function buyBabyPanda(number){
    var babypandacost = Math.floor(10 * Math.pow(1.1,babypanda));     
    if(pandas >= babypandacost){                                  
        babypanda = babypanda + 1;                                   
        pandas = pandas - babypandacost;                          
        document.getElementById('babypanda').innerHTML = babypanda;  
        document.getElementById('pandas').innerHTML = pandas;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,babypanda));      
    document.getElementById('babypandacost').innerHTML = nextCost;  
};

window.setInterval(function(){
onePanda(babypanda);
}, 1000);
