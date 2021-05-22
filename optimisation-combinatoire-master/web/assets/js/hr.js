var capacite = 0 ; 
var items = [] ; 
var nombre_items = 0 ; 
var solution = [] ; 


/*---------------------------------------------------------------------------------------------*/
        
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
         
            document.getElementById("sol_bins1").innerHTML = "" ; 
            document.getElementById("time1").innerHTML ="" ; 
            document.getElementById("sol_bins2").innerHTML = "" ; 
            document.getElementById("time2").innerHTML ="" ; 
        
        }
        //just for test
        async function run() {
            var tab =[];
            tab  = await eel.ffd_py(capacite,items)();
            var a = tab[0];
            var b = tab[1];
            var c = [];
            c = tab[2];
            console.log(a + " from Python")
            console.log(b + " from Python")
            console.log(c + " from Python")
         }
         
       
         async function loadtable(tableau){
            var obj = $(".body_objets2")[0] ;
            for(var i = 0 ; i <tableau.length ; i++) {
                var tr = document.createElement('tr') ; 
                tr.innerHTML=" <td> " +i + " </td> <td> " + tableau[i]+ "</td>" ; 
                obj.append (tr) ; 
            }
         }
         eel.expose(heurisjs);
        async function heurisjs(){
            var configs = [6];
            //--------------------------------------------------------
            var tab1 =[];
            tab1  = await eel.ffd_py(capacite,items)();
            var c1 = [];
            c1 = tab1[2];
            console.log(" configuration : "+c1)
            //loadtable(c1);
            //--------------------------------------------------------
            var tab2 =[];
            tab2  = await eel.ffi_py(capacite,items)();
            var c2 = [];
            c2 = tab2[2];
            console.log(" configuration : "+c2)
            //--------------------------------------------------------
            var tab3 =[];
            tab3  = await eel.bf_py(capacite,items)();
            var c3 = [];
            c3 = tab3[2];
            console.log(" configuration : "+c3)
            //--------------------------------------------------------
            var tab4 =[];
            tab4  = await eel.wf_py(capacite,items)();
            var c4 = [];
            c4 = tab4[2];
            console.log(" configuration : "+c4)
            //--------------------------------------------------------
            var tab5 =[];
            tab5 = await eel.awf_py(capacite,items)();
            var c5 = [];
            c5 = tab5[2];
            console.log(" configuration : "+c5)
            //--------------------------------------------------------
            var tab6 =[];
            tab6  = await eel.nf_py(capacite,items)();
            var c6 = [];
            c6 = tab6[2];
            console.log(" configuration : "+c6)
            configs[0]=c1;configs[1]=c2;configs[2]=c3;configs[3]=c4;configs[4]=c5;configs[5]=c6;
            //return configs;
            //console.log(" configuration : "+configs[6]+"&&[5]")
            function onRowClick(tableId,callback) {
                var table = document.getElementById(tableId),
                    rows = table.getElementsByTagName("tr"),
                    i;
               // console.log("  rows.length ==="+rows.length+"&&[5]")
                for (i = 0; i < rows.length; i++) {
                   // console.log("iiiiiiiiiiiiii"+i);
                    table.rows[i].onclick = function (row) {
                        return function () {
                            var k = configs[this.rowIndex-1];
                            loadtable(k);
                            console.log("++++++++++ROW"+this.rowIndex);
                            callback(row);
                        };
                    }(table.rows[i]);
                }
            };
            onRowClick("my-table-id", function (row){
                $("#table").remove();
            });
        //------------------------------------------------------------------------
        }

        
  //______________________________________________________________________
        eel.expose(jsaffich1); // Expose this function to Python
        function jsaffich1(a,t) {
            document.getElementById("sol_bins1").innerHTML = a ; 
            document.getElementById("time1").innerHTML = t + " secondes" ;
        }
        eel.expose(jsaffich2);
        function jsaffich2(a,t) {
            document.getElementById("sol_bins2").innerHTML = a ; 
            document.getElementById("time2").innerHTML = t + " secondes" ;
        }
        eel.expose(jsaffich3);
        function jsaffich3(a,t) {
            document.getElementById("sol_bins3").innerHTML = a ; 
            document.getElementById("time3").innerHTML = t + " secondes" ;
        }
        eel.expose(jsaffich4);
        function jsaffich4(a,t) {
            document.getElementById("sol_bins4").innerHTML = a ; 
            document.getElementById("time4").innerHTML = t + " secondes" ;
        }
        eel.expose(jsaffich5);
        function jsaffich5(a,t) {
            document.getElementById("sol_bins5").innerHTML = a ; 
            document.getElementById("time5").innerHTML = t + " secondes" ;
        }
        eel.expose(jsaffich6);
        function jsaffich6(a,t) {
            document.getElementById("sol_bins6").innerHTML = a ; 
            document.getElementById("time6").innerHTML = t + " secondes" ;
        }
