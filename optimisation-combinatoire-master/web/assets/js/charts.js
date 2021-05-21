// get files and items , execute algorithms 

document.querySelector("#file-upload-1").onchange = async function(){
    document.querySelector("#file-name").textContent ="loaded" ; 
    var text = "" ; 
    var names = [] ; 
    var list = [ ] ; 
    var capacite = [] ;  
    var nombre_items =  [] ; 
    var items = [] ; 
    for ( var i = 0 ; i < this.files.length ; i++ ){
        text = await (new Response(this.files[i]).text());
        names[i] = this.files[i].name ; 
        list= text.split('\n') ;
        list = list.map(function (x) { return parseInt(x); });
        capacite[i] =  list[1]  ; 
        nombre_items[i] = list[0] ; 
        items[i] = list.slice(2 , list[0]+2 ) ;



    }
    console.log(items , capacite , nombre_items ) ; 
    for( i=0 ; i < items.length ; i++ ) {
        // execute les heuristiques et recuperer les resultats dans deux tableaux temps[][] et solutions[][] , pour chaque instances le reusltat de chaque heuristique ;  
    }

}


/*----------------------------------------------------------------------------------------------*/




/*function for line chart 1 */ 

$(function() {
    var options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false,
            width: 2,
        },
        stroke: {
            curve: 'straight',
        },
        colors: ["#4680ff"],
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f6ff', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#line-chart-1"),
        options
    );
    chart.render();
});



/*function for line chart 2 */  
$(function() {
    var options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 5 , 
            curve: 'straight',
            dashArray: [0, 0, 0]
        },
        colors: ["#0e9e4a", "#ffba57", "#ff5252"],
        series: [{
                name: "Session Duration",
                data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
            },
            {
                name: "Page Views",
                data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
            },
            {
                name: 'Total Visits',
                data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
            }
        ],
        title: {
            text: 'Page Statistics',
            align: 'left'
        },
        markers: {
            size: 0,

            hover: {
                sizeOffset: 6
            }
        },
        xaxis: {
            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                '10 Jan', '11 Jan', '12 Jan'
            ],
        },
        tooltip: {
            y: [{
                title: {
                    formatter: function(val) {
                        return val + " (mins)"
                    }
                }
            }, {
                title: {
                    formatter: function(val) {
                        return val + " per session"
                    }
                }
            }, {
                title: {
                    formatter: function(val) {
                        return val;
                    }
                }
            }]
        },
        grid: {
            borderColor: '#f1f1f1',
        }
    }
    var chart = new ApexCharts(
        document.querySelector("#line-chart-2"),
        options
    );
    chart.render();
});




/*function for bar chart 1 */ 

$(function() {
    var options = {
        chart: {
            height: 350,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#0e9e4a", "#4680ff", "#ff5252" , "#ffba57" , "#00acc1"],
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91]
        }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52]
        },
        {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52]
        },
        {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52]
        }],
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        fill: {
            opacity: 1

        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    }
    var chart = new ApexCharts(
        document.querySelector("#bar-chart-1"),
        options
    );
    chart.render();
});










async function loadFile(file) {
    let text = await (new Response(file)).text();
    var list= text.split('\n') ;
    var list = list.map(function (x) { return parseInt(x); });
    capacite =  list[1]  ; 
    nombre_items = list[0] ; 
    items = list.slice(2 , list[0]+2 ) ;



}