<template>
  <div>
    <common-card title="今日交易用户数" value="81,014">
      <template>
        <div
          id="today-user-charts"
          :style="{ width: '100%', height: '100%' }"
        ></div>
      </template>
      <template v-slot:footer>
        <span>退货率</span>
        <span class="emphasis">5.14%</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin.js'
export default {
  name: 'TodayUser',
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = document.getElementById('today-user-charts')
    const chart = this.$echarts.init(chartDom) // 到此步完成echarts的初始化
    chart.setOption({
      color: ['#3398db'], // 设置柱状图颜色
      // x轴
      xAxis: {
        type: 'category', // value,直线图
        show: false, // 隐藏x轴
        boundaryGap: false, // 把默认的距离两侧x轴的边距取消
        data: [
          '01:00',
          '00:00',
          '00:00',
          '01:00',
          '00:00',
          '01:00',
          '00:00',
          '01:00',
          '00:00',
          '00:00',
          '00:00',
          '01:00',
          '00:00',
          '01:00'
        ]
      },
      // y轴
      yAxis: {
        show: false // 隐藏Y轴
      },
      // 系列对应图表，一个系列就是一张图。
      series: [
        {
          // 渲染柱状图
          type: 'bar',
          // 通过data指定绘图数据
          data: [37, 56, 88, 124, 34, 11, 90, 80, 56, 88, 124, 56, 88, 124],
          // 调整柱子宽度
          barWidth: '60%'
        }
      ],
      grid: {
        // 布局
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
      }
    })
  }
}
</script>

<style>
</style>
