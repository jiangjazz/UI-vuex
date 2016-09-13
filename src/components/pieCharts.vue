<template>
    <div class="echart" :id="name">
    </div>
</template>

<script>
// 引入echart
import echart from 'echarts'
import $ from 'jquery'
export default {
  data () {
    return {
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'green'
    },
    date: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 26
    }
  },
  ready () {
    let myChart = echart.init($('#' + this.name)[0])
    // 指定图表的配置项和数据
    let option = {
      tooltip: {
        show: false
      },
      color: [
        this.color, '#f2f2f2'
      ],
      series: [{
        // name: '访问来源',
        type: 'pie',
        radius: ['72%', '80%'],
        clockwise: false,
        startAngle: 75,
        hoverAnimation: false,
        selectedMode: false,
        avoidLabelOverlap: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        label: {
          normal: {
            show: false
          }
        },
        data: [{
          name: '直接访问',
          value: this.date,
          label: {
            normal: {
              show: true,
              formatter: '{d}%',
              position: 'center',
              textStyle: {
                fontSize: this.size,
                fontWeight: 'bold'
              }
            }
          },
          itemStyle: {
            emphasis: {
              color: this.color
            }
          }
        }, {
          name: '邮件营销',
          value: 2000 - this.date,
          itemStyle: {
            emphasis: {
              color: '#f2f2f2'
            }
          }
        }]
      }]
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
  }
}
</script>
