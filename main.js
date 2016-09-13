var clicks = 0;
function oneClick(number) {
	clicks = clicks + number;document.getElementById("clicks").innerHTML = clicks;
};
var cursors = 0;
function buyCursor(number){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(clicks >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	clicks = clicks - cursorCost;                          //removes the clicks spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = clicks;  //updates the number of clicks for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
window.setInterval(function(){
oneClick(cursors);
}, 1000);
