<template>
  <div id="liquidfill"></div>
</template>

<script>
import 'echarts-liquidfill'

export default {
  mounted () {
    const chartDom = document.getElementById('liquidfill')
    const chart = this.$echarts.init(chartDom) // 到此步完成echarts的初始化
    chart.setOption({
      series: [
        {
          type: 'liquidFill',
          data: [0.6]
        }
      ]
    })
  }
}
</script>

<style lang="scss" scoped>
#liquidfill {
  width: 300px;
  height: 300px;
}
</style>
