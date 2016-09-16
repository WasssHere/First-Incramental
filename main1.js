//Save Functions

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
//Tab Functions

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
