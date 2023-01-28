
//Variables

let Agua = parseFloat(0.6);
let Crema= parseFloat(1);
let bombomHeladix = parseFloat(1.6);
let bombomHeladomix = parseFloat(1.7);
let bombomHeladon = parseFloat(1.8);
let poteConfites = parseFloat(2.9);
let pote14 = parseFloat(2.9);



let persona1="Cofla";
let persona2="Roberto";
let persona3="Pedro";

//Ingreso

let dineroCofla = prompt("Cuanto dinero tienes Cofla?");
let dineroRoberto = prompt("Cuanto dinero tienes Roberto?");
let dineroPedro = prompt("Cuanto dinero tienes Pedro?");

dineroCofla=parseFloat(dineroCofla);
dineroRoberto=parseFloat(dineroRoberto);
dineroPedro=parseFloat(dineroPedro);


//Persona 1

if (dineroCofla >= Agua && dineroCofla < Crema) {
	alert(`${persona1} tiene $${dineroCofla} puede comprar  el helado de Agua $${Agua}`);
    alert("Y se sobran $" + (dineroCofla - Agua));
}
 else if (dineroCofla>=Crema&&dineroCofla<bombomHeladix) {
 	alert(`${persona1} tiene $${dineroCofla} puede comprar  el helado de Crema $${Crema}`);
    alert("Y se sobran $" + (dineroCofla - Crema));
 }

 else if (dineroCofla>=bombomHeladix && dineroCofla<bombomHeladomix){
 	alert(`${persona1} tiene &${dineroCofla} puede comprar  el helado Bombom Heladix $${bombomHeladix}`);
    alert("Y se sobran $" + (dineroCofla - bombomHeladix));
 }

 else if (dineroCofla>=bombomHeladomix && dineroCofla<bombomHeladon) {
 	alert(`${persona1} tiene $${dineroCofla} puede comprar  el helado Bombom Heladomix $${bombomHeladomix}`);
    alert("Y se sobran $" + (dineroCofla - bombomHeladomix));
 }

 else if (dineroCofla>=bombomHeladon && dineroCofla<pote14) {
 	alert(`${persona1} tiene $${dineroCofla} puede comprar  el helado Bombom Heladon $${bombomHeladon}`);
    alert("Y se sobran $" + (dineroCofla - bombomHeladon));
 }

else if (dineroCofla>=poteConfites) {
 	alert(`${persona1} tiene $${dineroCofla} puede comprar  pote con Confites o pote de 1/4 $${poteConfites}`)
    alert("Y se sobran $" + (dineroCofla - poteConfites));
}

else{
	alert(`No te alcanza para nada ${persona1} tienes $0`)
}

//Persona 2

if (dineroRoberto >= Agua && dineroRoberto < Crema) {
    alert(`${persona2} tiene $${dineroRoberto} puede comprar  el helado de Agua $${Agua}`);;
    alert("Y se sobran $" + (dineroRoberto - Agua));
}
 else if (dineroRoberto>=Crema&&dineroRoberto<bombomHeladix) {
    alert(`${persona2} tiene $${dineroRoberto} puede comprar  el helado de Crema $${Crema}`);
    alert("Y se sobran $" + (dineroRoberto - Crema));
 }

 else if (dineroRoberto>=bombomHeladix && dineroRoberto<bombomHeladomix){
    alert(`${persona2} tiene &${dineroRoberto} puede comprar  el helado Bombom Heladix $${bombomHeladix}`);
    alert("Y se sobran $" + (dineroRoberto - bombomHeladix));
 }

 else if (dineroRoberto>=bombomHeladomix && dineroRoberto<bombomHeladon) {
    alert(`${persona2} tiene $${dineroRoberto} puede comprar  el helado Bombom Heladomix $${bombomHeladomix}`);
    alert("Y se sobran $" + (dineroRoberto - bombomHeladomix));
 }

 else if (dineroRoberto>=bombomHeladon && dineroRoberto<pote14) {
    alert(`${persona2} tiene $${dineroRoberto} puede comprar  el helado Bombom Heladon $${bombomHeladon}`);
    alert("Y se sobran $" + (dineroRoberto - bombomHeladon));
 }

else if (dineroRoberto >= pote14) {
    alert(`${persona2} tiene $${dineroRoberto} puede comprar  pote con Confites o pote de 1/4 $${poteConfites}`);
    alert("Y se sobran $" + (dineroRoberto - poteConfites));
}

else if (dineroRoberto==null) {
    alerte(`No te alcanza para ${persona2} nada tienes $0`);
}

else{
    alert(`No te alcanza para nada ${persona2} tienes $0`);
}

//Persona 3

if (dineroPedro >= Agua && dineroPedro < Crema) {
    alert(`${persona3} tiene $${dineroPedro} puede comprar  el helado de Agua $${Agua}`);
    alert("Y se sobran $" + (dineroPedro - Agua));
}
 else if (dineroPedro>=Crema&&dineroPedro<bombomHeladix) {
    alert(`${persona3} tiene $${dineroPedro} puede comprar  el helado de Crema $${Crema}`);
    alert("Y se sobran $" + (dineroPedro - Crema));
 }

 else if (dineroPedro>=bombomHeladix && dineroPedro<bombomHeladomix){
    alert(`${persona3} tiene &${dineroPedro} puede comprar  el helado Bombom Heladix $${bombomHeladix}`);
    alert("Y se sobran $" + (dineroPedro - bombomHeladix));
 }

 else if (dineroPedro>=bombomHeladomix && dineroPedro<bombomHeladon) {
    alert(`${persona3} tiene $${dineroPedro} puede comprar  el helado Bombom Heladomix $${bombomHeladomix}`);
    alert("Y se sobran $" + (dineroPedro - bombomHeladomix));
 }

 else if (dineroPedro>=bombomHeladon && dineroPedro<poteConfites) {
    alert(`${persona3} tiene $${dineroPedro} puede comprar  el helado Bombom Heladon $${bombomHeladon}`);
    alert("Y se sobran $" + (dineroPedro - bombomHeladon));
 }

else if (dineroPedro>=poteConfites){
    alert(`${persona3} tiene $${dineroPedro} puede comprar  pote con Confites o pote de 1/4 $${poteConfites}`);
    alert("Y se sobran $" + (dineroPedro - poteConfites));
}
else if (dineroPedro==null) {
    alert(`No te alcanza para ${persona3} nada tienes $0`);
}

else{
    alert(`No te alcanza para nada ${persona3} tienes $0`)
}