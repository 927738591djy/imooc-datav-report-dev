<template>
  <div>
    <common-card title="累计订单量" value="3157,420">
      <template>
        <v-echart :option="getOptions()"></v-echart>

      </template>
      <template v-slot:footer>
        <span>昨日订单量</span>
        <span class="emphasis"> 2000,000</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin.js'
export default {
  name: 'TotalOrders',
  mixins: [commonCardMixin],
  methods: {
    // 定义图表信息动态传入的方法
    getOptions () {
      return {
      // x轴
        xAxis: {
        // type: 'value', 默认是value,直线图
          type: 'category', // 就变成折现图了
          show: false, // 隐藏x轴
          boundaryGap: false // 把默认的距离两侧x轴的边距取消
        },
        // y轴
        yAxis: {
          show: false // 隐藏Y轴
        },
        // 系列对应图表，一个系列就是一张图。
        series: [
          {
          // 渲染折线图
            type: 'line',
            // 通过data指定绘图数据
            data: [620, 432, 220, 534, 790, 240, 580],
            areaStyle: {
              color: 'purple' // 设置面积区域样式，将面积区域颜色设置为紫色
            },
            smooth: true, // 让图表更加平滑的展示
            lineStyle: {
            // 设置线的样式
              width: 0 // 线就没了
            },
            itemStyle: {
            // 设置每个点的样式
              opacity: 0 // 点就不显示了
            }
          }
        ],
        grid: {
        // 布局
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        }
      }
    }
  }
}
</script>

<style>
</style>
