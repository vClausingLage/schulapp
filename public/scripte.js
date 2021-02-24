// Suche im Lexikon AJAX req
function startSuche() {
    let suche = document.getElementById("suchfeld").value;
    console.log(suche);
    if (suche == "") {
        document.getElementById("txtHint").innerHTML = "";
    return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
    }};
    xmlhttp.open("GET","lexikon.php?q="+suche,true);
    xmlhttp.send();
    }
}
// Klasse 7b Satzteile Hilfen
function changeSubj() {
  var image = document.getElementById('Satzteile');
    image.src = "Bilder/SUBJ.jpg";
  }

function changeGen() {
  var image = document.getElementById('Satzteile');
    image.src = "Bilder/GEN.jpg";
  }

function changeAkk() {
  var image = document.getElementById('Satzteile');
    image.src = "Bilder/AKK.jpg";
  }

function changeLeer() {
  var image = document.getElementById('Satzteile');
    image.src = "Bilder/LEER.jpg";
  }

// Klasse 7b S. 40 Ü d)

function pruef7bd(){
  if (document.getElementById("ud11").value == "t") {
    document.getElementById()
  }
}

// Klasse 9b Augias

function satzteileneunb() {
  var image = document.getElementById('Stall_Augias');
    image.src = "Bilder/Tips-Satzteile9b.jpg";
  }

function verbenneunb() {
  var image = document.getElementById('Stall_Augias');
    image.src = "Bilder/Tips-Verben9b.jpg";
  }
