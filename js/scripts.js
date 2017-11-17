//Highcharts Stuff

//Trend Graph
Highcharts.chart('container', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: false,
    },
    exporting: { 
        enabled: false 
    },  
  credits: {
      enabled: false
  },      
    subtitle: {
        text: false,
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '$ {value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: false,
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: false,
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '$ {value} ',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
     enabled: true,
     floating: true,
             align: "center",
     verticalAlign: 'bottom',
       y:20,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [{
        name: 'Spend 2017',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        tooltip: {
            valueSuffix: ' $'
        }

    }, {
        name: 'Revenue 2017',
        type: 'spline',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        tooltip: {
            valueSuffix: '$'
        }
    }]
});

//Funnel
Highcharts.chart('funnel-graph', {
    chart: {
        type: 'funnel'
    },
    title: {
        text: false
    },
    exporting: { 
        enabled: false 
    },
  credits: {
      enabled: false
  },    
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b> ({point.y:,.0f})',
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                softConnector: true
            },
            center: ['40%', '50%'],
            neckWidth: '30%',
            neckHeight: '25%',
            width: '80%'
        }
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'Unique users',
        data: [
            ['Impressions', 15654],
            ['Clicks', 4064],
            ['Visits', 1987],
            ['Orders', 976],
        ]
    }]
});

//Monthly 2017 Trend Graph
var chart = Highcharts.chart('monthly-trend-container-1', {

    title: {
        text: false,
    },

    subtitle: {
        text: false,
    },
    exporting: { 
        enabled: false 
    },        
  credits: {
      enabled: false
  },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
        type: 'column',
        colorByPoint: true,
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        showInLegend: false
    }]

});

var chart = Highcharts.chart('monthly-trend-container-2', {

    title: {
        text: false,
    },

    subtitle: {
        text: false,
    },
    exporting: { 
        enabled: false 
    },    
  credits: {
      enabled: false
  },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
        type: 'column',
        colorByPoint: true,
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        showInLegend: false
    }]

});

var chart = Highcharts.chart('monthly-trend-container-3', {

    title: {
        text: false,
    },
  credits: {
      enabled: false
  },
    subtitle: {
        text: false,
    },
    exporting: { 
        enabled: false 
    },        

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
        type: 'column',
        colorByPoint: true,
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        showInLegend: false
    }]

});

var chart = Highcharts.chart('monthly-trend-container-4', {

    title: {
        text: false,
    },

    subtitle: {
        text: false,
    },
    exporting: { 
        enabled: false 
    },        
  credits: {
      enabled: false
  },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
        type: 'column',
        colorByPoint: true,
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        showInLegend: false
    }]

});

var chart = Highcharts.chart('monthly-trend-container-5', {

    title: {
        text: false,
    },

    subtitle: {
        text: false,
    },
    exporting: { 
        enabled: false 
    },        
  credits: {
      enabled: false
  },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
        type: 'column',
        colorByPoint: true,
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        showInLegend: false
    }]

});

