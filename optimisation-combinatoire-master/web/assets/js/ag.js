	
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
        document.getElementById("POPSZ").value =50 ; 
        document.getElementById("MAXGEN").value =250 ; 
        document.getElementById("MAXNCHG").value =50 ; 
        document.getElementById("TOURSZ").value =20 ; 
        document.getElementById("MUTRT").value =0.3 ; 
        document.getElementById("CRRT").value =0.6 ;

        document.getElementById("sol_bins").innerHTML = "" ; 
        document.getElementById("time").innerHTML ="" ; 
         
    }
    function agjs(){
        eel.agpy(capacite,items);
        
    }
    
    eel.expose(jsaffich); // Expose this function to Python
    function jsaffich(a,t) {
        document.getElementById("sol_bins").innerHTML = a ; 
        document.getElementById("time").innerHTML = t + " secondes" ;
    }
    
    
    