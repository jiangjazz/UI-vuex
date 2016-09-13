<template>
    <div class="areaChart" :id="name">
      面积图
    </div>
</template>

<script>
  let Highcharts = require('highcharts')
  // 在 Highcharts 加载之后加载功能模块
  require('highcharts/modules/exporting')(Highcharts)
  // import highcharts from 'highcharts'
  // 皮肤
  Highcharts.theme = {
    colors: ['#ff2b65', '#0ecfe0'],
    chart: {
      backgroundColor: null
    },
    subtitle: {
      style: {
        color: 'black'
      }
    },
    tooltip: {
      borderWidth: 0
    },
    legend: {
      itemStyle: {
        fontWeight: '400',
        fontSize: '12px'
      }
    },
    xAxis: {
      labels: {
        style: {
          color: '#6e6e70'
        }
      }
    },
    yAxis: {
      labels: {
        style: {
          color: '#6e6e70'
        }
      }
    },
    plotOptions: {
      series: {
        shadow: false
      },
      candlestick: {
        lineColor: '#404048'
      },
      map: {
        shadow: false
      }
    },
    exporting: {
      enabled: false
    },
    // Highstock specific
    navigator: {
      xAxis: {
        gridLineColor: '#D0D0D8'
      }
    },
    rangeSelector: {
      buttonTheme: {
        fill: 'white',
        stroke: '#C0C0C8',
        'stroke-width': 1,
        states: {
          select: {
            fill: '#D0D0D8'
          }
        }
      }
    },
    scrollbar: {
      trackBorderColor: '#C0C0C8'
    },
    // General
    background2: '#E0E0E8'
  }

  // Apply the theme
  Highcharts.setOptions(Highcharts.theme)

  export default {
    data () {
      return {}
    },
    props: {
      name: {
        type: String,
        required: true
      }
    },
    ready () {
      Highcharts.chart(this.name, {
        chart: {
          type: 'areaspline'
        },
        title: {
          text: null
        },
        legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'top',
          x: 39,
          y: -10,
          floating: true,
          borderWidth: 1,
          backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          title: {
            text: null
          }
        },
        tooltip: {
          xDateFormat: '%Y-%m-%d',
          shared: true
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          areaspline: {
            fillOpacity: 0.2
          },
          series: {
            pointStart: Date.UTC(2016, 8, 1),
            pointInterval: 24 * 3600 * 1000 // one day
          }
        },
        series: [{
          name: 'John',
          data: [
            Math.random() * 500,
            Math.random() * 500,
            Math.random() * 500,
            Math.random() * 500,
            Math.random() * 500,
            Math.random() * 500,
            Math.random() * 500,
            Math.random() * 500,
            Math.random() * 500,
            Math.random() * 500
          ]
        }, {
          name: 'Jane',
          data: [
            Math.random() * 500,
            Math.random() * 500,
            Math.random() * 500,
            Math.random() * 500,
            Math.random() * 500,
            Math.random() * 500,
            Math.random() * 500,
            Math.random() * 500,
            Math.random() * 500,
            Math.random() * 500
          ]
        }]
      })
    }
  }
</script>
