var capacite = 0 ; 
var items = [] ; 
var nombre_items = 0 ; 
var solution = [] ; 

async function loadFile(file) {
    let text = await (new Response(file)).text();
    var list= text.split('\n') ;
    var list = list.map(function (x) { return parseInt(x); });
    capacite =  list[1]  ; 
    nombre_items = list[0] ; 
    items = list.slice(2 , list[0]+2 ) ;
    var objets = $(".body_objets")[0] ; 
    var nb = $("#NB")[0] ; 
    var c = $("#capacite")[0] ; 
    var poids = $("#Poids")[0] ; 

    poids.innerHTML = Math.min (...items) + " < p < " + Math.max (...items) ; 
    c.innerHTML = capacite ; 
    nb.innerHTML = nombre_items ; 
    for(var i = 0 ; i <items.length ; i++) {
        var tr = document.createElement('tr') ; 
        tr.innerHTML=" <td> " +i + " </td> <td> " + items[i]+ "</td>" ; 
        objets.append (tr) ; 
    }
 
    document.getElementById("sol_bins").innerHTML = "" ; 
    document.getElementById("time").innerHTML ="" ; 
     

}
async function loadtable(tableau){
    var obj = $(".body_objets2")[0] ;
    for(var i = 0 ; i <tableau.length ; i++) {
        var tr = document.createElement('tr') ; 
        tr.innerHTML=" <td> " +i + " </td> <td> " + tableau[i]+ "</td>" ; 
        obj.append (tr) ; 
    }
 }
async function bnbjs(){
    //eel.branchAndBound(items,capacite);
            var tab =[];
            tab  = await eel.branchAndBound(items,capacite)();
            var c = [];
            c = tab[2];
            console.log(" configuration : "+c);
            loadtable(c);
}

eel.expose(jsaffich); // Expose this function to Python
function jsaffich(a,t) {
    document.getElementById("sol_bins").innerHTML = a ; 
    document.getElementById("time").innerHTML = t + " secondes" ;
}
