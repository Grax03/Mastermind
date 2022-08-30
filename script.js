//6 colori
var z = ["orange", "blue", "yellow", "green", "purple", "black"];

//array vuoto per inserire il codice colore nei campi
var input = [];
//array vuoto dei campi colore
var inputcolor = []; 

var counter = 0;

//colore radom nella programmazione delle scatole
var field = document.getElementById("first").childNodes;

//colori
var orange 	= document.getElementById("orange");
var blue 	= document.getElementById("blue");
var yellow 	= document.getElementById("yellow");
var green 	= document.getElementById("green");
var purple 	= document.getElementById("purple");
var black 	= document.getElementById("black");

orange.style.display = "none";
blue.style.display = "none";
yellow.style.display = "none";
green.style.display = "none";
purple.style.display = "none";
black.style.display = "none";

var code1 = document.getElementById("code1");
var code2 = document.getElementById("code2");
var code3 = document.getElementById("code3");
var code4 = document.getElementById("code4");

code1.style.visibility = "hidden";
code2.style.visibility = "hidden";
code3.style.visibility = "hidden";
code4.style.visibility = "hidden";

//estrae colori casuali dall'array z e li visualizza nel log della console.
input[0] = z [Math.floor((Math.random() * 6 ))] ;
input[1] = z [Math.floor((Math.random() * 6 ))] ;
input[2] = z [Math.floor((Math.random() * 6 ))] ;
input[3] = z [Math.floor((Math.random() * 6 ))] ;

console.log(input)

//avvia il gioco
function newgame() {
	//rende i colori visibili
	orange.style.display = "block";
	blue.style.display = "block";
	yellow.style.display = "block";
	green.style.display = "block";
	purple.style.display = "block";
	black.style.display = "block";

    //questi sono i campi in cui appariranno i colori
    field[1].style.backgroundColor = input[0];
    field[3].style.backgroundColor = input[1];
    field[5].style.backgroundColor = input[2];
    field[7].style.backgroundColor = input[3];

}

//controllare i colori e il bordo verde o rosso
//funzione che confronta i colori ad ogni tentativo
function checkinput(colore,coloreinput) {
	if (colore == coloreinput) {
		document.getElementById('invoer'+counter).style.border = "2px solid green";
		completecode();
	}else if (input.indexOf(coloreinput)>-1) {
		document.getElementById('invoer'+counter).style.border = "2px solid red";
	}
}

function setcolor(color,setid){
	//Posizionare i campi con il proprio id
	var id_row1 = document.getElementById('row1');
	var fldset  = document.createElement("fieldset");
	var colorchoise=document.getElementById(setid);
	inputcolor[counter]=color;
	console.log(inputcolor);

	//posizionare un massimo di soli 48 spazi per raggiungere i 12 tentativi
	if (counter < 48) {
		fldset.setAttribute("id","invoer"+counter+"");
		id_row1.appendChild(fldset);
		fldset.setAttribute("style", "background-color:"+color+"");
	}

	//Confrontare con il codice colore ad ogni tentativo
	if (counter < 4) {
		checkinput(input[counter],inputcolor[counter]);
	}
	else if (counter > 3 && counter < 8){
		checkinput(input[counter-4],inputcolor[counter]);
	}
	else if (counter > 7 && counter < 12){
		checkinput(input[counter-8],inputcolor[counter]);
	}
	else if (counter > 11 && counter < 16){
		checkinput(input[counter-12],inputcolor[counter]);	
	}
	else if (counter > 15 && counter < 20){
		checkinput(input[counter-16],inputcolor[counter]);
	}
	else if (counter > 19 && counter < 24){
		checkinput(input[counter-20],inputcolor[counter]);
	}
	else if (counter > 23 && counter < 28){
		checkinput(input[counter-24],inputcolor[counter]);
	}
	else if (counter > 27 && counter < 32){
		checkinput(input[counter-28],inputcolor[counter]);
	}
	else if (counter > 31 && counter < 36){
		checkinput(input[counter-32],inputcolor[counter]);
	}
	else if (counter > 35 && counter < 40){
		checkinput(input[counter-36],inputcolor[counter]);
	}
	else if (counter > 39 && counter < 44){
		checkinput(input[counter-40],inputcolor[counter]);
	}
	else if (counter > 43 && counter < 48){
		checkinput(input[counter-44],inputcolor[counter]);
	}

	counter = counter +1; 

	if (counter == 49) {
		alert("Game Over, premere F5 per una nuova partita"); 

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";

		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";
	}
}

function completecode(){
	if (input[0] == inputcolor[0] &&
		input[1] == inputcolor[1] &&
		input[2] == inputcolor[2] &&
		input[3] == inputcolor[3]) {

		alert("Hai vinto");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";

	} else if (
		input[0] == inputcolor[4] &&
		input[1] == inputcolor[5] &&
		input[2] == inputcolor[6] &&
		input[3] == inputcolor[7]) {
		
		alert("Hai vinto");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	} else if (
		input[0] == inputcolor[8] &&
		input[1] == inputcolor[9] &&
		input[2] == inputcolor[10] &&
		input[3] == inputcolor[11]) {
		
		alert("Hai vinto");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	} else if (
		input[0] == inputcolor[12] &&
		input[1] == inputcolor[13] &&
		input[2] == inputcolor[14] &&
		input[3] == inputcolor[15]) {
		
		alert("Hai vinto");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	} else if (
		input[0] == inputcolor[16] &&
		input[1] == inputcolor[17] &&
		input[2] == inputcolor[18] &&
		input[3] == inputcolor[19]) {
		
		alert("Hai vinto");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	} else if (
		input[0] == inputcolor[20] &&
		input[1] == inputcolor[21] &&
		input[2] == inputcolor[22] &&
		input[3] == inputcolor[23]) {
		
		alert("Hai vinto");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	} else if (
		input[0] == inputcolor[24] &&
		input[1] == inputcolor[25] &&
		input[2] == inputcolor[26] &&
		input[3] == inputcolor[27]) {
		
		alert("Hai vinto");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	} else if (
		input[0] == inputcolor[28] &&
		input[1] == inputcolor[29] &&
		input[2] == inputcolor[30] &&
		input[3] == inputcolor[31]) {
		
		alert("Hai vinto");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	} else if (
		input[0] == inputcolor[32] &&
		input[1] == inputcolor[33] &&
		input[2] == inputcolor[34] &&
		input[3] == inputcolor[35]) {
		
		alert("Hai vinto");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	} else if (
		input[0] == inputcolor[36] &&
		input[1] == inputcolor[37] &&
		input[2] == inputcolor[38] &&
		input[3] == inputcolor[39]) {
		
		alert("Hai vinto");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	} else if (
		input[0] == inputcolor[40] &&
		input[1] == inputcolor[41] &&
		input[2] == inputcolor[42] &&
		input[3] == inputcolor[43]) {
		
		alert("Hai vinto");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	} else if (
		input[0] == inputcolor[44] &&
		input[1] == inputcolor[45] &&
		input[2] == inputcolor[46] &&
		input[3] == inputcolor[47]) {
		
		alert("Hai vinto");
		code1.style.visibility = "visible";
		code2.style.visibility = "visible";
		code3.style.visibility = "visible";
		code4.style.visibility = "visible";

		orange.style.display = "none";
		blue.style.display = "none";
		yellow.style.display = "none";
		green.style.display = "none";
		purple.style.display = "none";
		black.style.display = "none";
	}
}
