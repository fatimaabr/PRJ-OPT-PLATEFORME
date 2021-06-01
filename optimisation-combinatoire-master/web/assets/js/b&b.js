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

async function addmanual(){
    cell1 = document.getElementById('capacite');
    cell1.contentEditable = true;
    
    cell2 = document.getElementById('NB');
    cell2.contentEditable = true;

    var cap = cell1.innerHTML;
    console.log("+++++++++++++++++++++++"+cap);
    var nb = cell2.innerHTML;
    console.log("----------------------"+nb);
    //-------------------------------------------------------------------------
    var intcap = parseInt(cap, 10);
    var intnb = parseInt(nb, 10);
    console.log("------------INT----------"+intcap + intnb);
    //-------------------------------------------------------------------------
    capacite =  intcap ; 
    nombre_items = intnb ;
    var objets = $(".body_objets")[0] ;
    objets.innerHTML = "";
    for(var i = 0 ; i <nombre_items ; i++) {
        var tr = document.createElement('tr') ; 
        tr.innerHTML=" <td> " +i + " </td> <td contentEditable = true> " + 0+ "</td> " ; //
        objets.append (tr) ; 
    }
    //console.log("ITEMS"+items);

    //--------------------------------------------------------------------------
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
    console.log("%%%capacite="+capacite);
    console.log("%%%items="+items);
    if (items.length == 0){
    var table = document.getElementById('objtab');
    for (var r = 0, n = table.rows.length; r < n; r++) { 
            items[r] = parseInt(table.rows[r].cells[1].innerHTML, 10);
            console.log(table.rows[r].cells[1].innerHTML);
    }
    //console.log("ITEMS+++++>"+items);
    items.shift();
    console.log("ITEMS after shift+++++>"+items);
    //--------------------------------------------------------------------------
     var poids = $("#Poids")[0] ; 
     poids.innerHTML = Math.min (...items) + " < p < " + Math.max (...items) ;
}
document.getElementById('capacite').contentEditable = false;
document.getElementById('NB').contentEditable = false;   
     //console.log("%%% typeofitems="+typeof items);
     //console.log("%%% typeofcapacity="+typeof capacite);
    //eel.branchAndBound(items,capacite);
            var tab =[];
            tab  = await eel.branchAndBound(items,capacite)();
            var c = [];
            c = tab[2];
            console.log(" configuration : "+c);
            //loadtable(c);
            //-------------------
			var set =  new Set(tab[2])   ;
            var p = 0 ; 
			var list_bins  = Array.from(set);
			//console.log("++++capacite+++"+capacite);
            var weights = new Array(list_bins.length); 
    weights.fill(0) ;
    var affectation = new Array( tab[0]) ; 
    for(var k = 0 ; k< tab[0] ; k++ ) {
        affectation[k] = [] ;  
    }
    for ( var i= 0 ; i < affectation.length ; i++ ) {
        for(var j = 0 ; j< tab[2].length; j++) {
            if(tab[2][j]==list_bins[i]) {
                affectation[i].push(j) ; 
                weights[i] += items[j] ; 
            }
        }       
    }
    console.log(weights) ; 
    var aff = $('.affectation')[0] ; 
    for(i = 0 ; i<affectation.length ; i++ ) {
        var elem = document.createElement('tr') ; 
        p = ( weights[i]*100 ) / capacite ; 
        elem.innerHTML = "	<td > " + i + " </td> <td > " + affectation[i] + "  </td> <td>  " +weights[i]+"  </td>  <td class='pr-4'><div class='progress mr-4 mt-2' style='height: 20px;'><div class='progress-bar' role='progressbar' style='width: " +p + "25%;' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'> "+p+" %</div></div></td>" ;
        aff.append(elem) ;         
}
}


eel.expose(jsaffich); // Expose this function to Python
function jsaffich(a,t) {
    document.getElementById("sol_bins").innerHTML = a ; 
    document.getElementById("time").innerHTML = t + " secondes" ;
}

