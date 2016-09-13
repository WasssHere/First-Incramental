function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

var pandas = 0;
function onePanda(number) {
    pandas = pandas + number;document.getElementById("pandas").innerHTML = pandas;
};

var babypanda = 0;
function buyBabyPanda(number){
    var babypandacost = Math.floor(10 * Math.pow(1.05,babypanda));     //works out the cost of this cursor
    if(pandas >= babypandacost){                                   //checks that the player can afford the cursor
        babypanda = babypanda + 1;                                   //increases number of babypanda
        pandas = pandas - babypandacost;                          //removes the pandas spent
        document.getElementById('babypanda').innerHTML = babypanda;  //updates the number of babypanda for the user
        document.getElementById('pandas').innerHTML = pandas;  //updates the number of pandas for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,babypanda));       //works out the cost of the next cursor
    document.getElementById('babypandacost').innerHTML = nextCost;  //updates the cursor cost for the user
};
window.setInterval(function(){
onePanda(babypanda);
}, 1000);
