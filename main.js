//Auto-Save Function

window.setInterval(function(){
save();
}, 30000);
//Buying Pandas/s Buildings and Upgrades

var pandas = 0;
function onePanda(number) {
    pandas = pandas + number*(clickupgrade+1);
    document.getElementById("pandas").innerHTML = pandas;
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
    var teenagepandacost = Math.floor(45 * Math.pow(1.1,teenagepanda));     
    if(pandas >= teenagepandacost){                                  
        teenagepanda = teenagepanda + 1;                                   
        pandas = pandas - teenagepandacost;                          
        document.getElementById('teenagepanda').innerHTML = teenagepanda;  
        document.getElementById('pandas').innerHTML = pandas;  
    };
    var nextCost = Math.floor(45 * Math.pow(1.1,teenagepanda));      
    document.getElementById('teenagepandacost').innerHTML = nextCost;  
};

var adultpanda = 0;
function buyAdultPanda(number){
    var adultpandacost = Math.floor(200 * Math.pow(1.1,adultpanda));     
    if(pandas >= adultpandacost){                                  
        adultpanda = adultpanda + 1;                                   
        pandas = pandas - adultpandacost;                          
        document.getElementById('adultpanda').innerHTML = adultpanda;  
        document.getElementById('pandas').innerHTML = pandas;  
    };
    var nextCost = Math.floor(200 * Math.pow(1.1,adultpanda));      
    document.getElementById('adultpandacost').innerHTML = nextCost;  
};

var elderpanda = 0;
function buyElderPanda(number){
    var elderpandacost = Math.floor(800 * Math.pow(1.1,elderpanda));     
    if(pandas >= elderpandacost){                                  
        elderpanda = elderpanda + 1;                                   
        pandas = pandas - elderpandacost;                          
        document.getElementById('elderpanda').innerHTML = elderpanda;  
        document.getElementById('pandas').innerHTML = pandas;  
    };
    var nextCost = Math.floor(800 * Math.pow(1.1,elderpanda));      
    document.getElementById('elderpandacost').innerHTML = nextCost;  
};

//Come back and finish new pandas.

var clickupgrade = 0;
function buyClickUpgrade(number){
    var clickupgradecost = Math.floor(100 * Math.pow(1.5,clickupgrade));     
    if(pandas >= clickupgradecost){                                  
        clickupgrade = clickupgrade + 1;                                   
        pandas = pandas - clickupgradecost;                          
        document.getElementById('clickupgrade').innerHTML = clickupgrade;  
        document.getElementById('pandas').innerHTML = pandas;  
    };
    var nextCost = Math.floor(100 * Math.pow(1.5,clickupgrade));      
    document.getElementById('clickupgradecost').innerHTML = nextCost;  
};

//Come back and finish upgrades.

//Loops

window.setInterval(function(){
onePanda(babypanda);
}, 1000);

window.setInterval(function(){
onePanda(teenagepanda * 3);
}, 1000);

window.setInterval(function(){
onePanda(adultpanda * 8);
}, 1000);

window.setInterval(function(){
onePanda(elderpanda * 20);
}, 1000);

