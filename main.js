function save() {
	var save = {
		pandas: pandas,
		babypanda: babypanda,
		teenagepanda: teenagepanda
	}
	localStorage.setItem("save",JSON.stringify(save));
}

function load() {
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.pandas !== "undefined") pandas = savegame.pandas;
	if (typeof savegame.babypanda !== "undefined") babypanda = savegame.babypanda;
	if (typeof savegame.teenagepanda !== "undefined") teenagepanda = savegame.teenagepanda;
}

function reset() {
	localStorage.removeItem("save")
}

function openAlertSave() {
	alert("Game Saved.")
}

function openAlertLoad() {
	alert("Game Loaded.")
}

function openAlertReset() {
	alert("Game Reset.")
}

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

var teenagepanda = 0;
function buyTeenagePanda(number){
    var teenagepandacost = Math.floor(100 * Math.pow(1.1,teenagepanda));     
    if(pandas >= teenagepandacost){                                  
        teenagepanda = teenagepanda + 1;                                   
        pandas = pandas - teenagepandacost;                          
        document.getElementById('teenagepanda').innerHTML = teenagepanda;  
        document.getElementById('pandas').innerHTML = pandas;  
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,teenagepanda));      
    document.getElementById('teenagepandacost').innerHTML = nextCost;  
};


window.setInterval(function(){
onePanda(babypanda);
}, 1000);

window.setInterval(function(){
onePanda(teenagepanda * 10);
}, 1000);


