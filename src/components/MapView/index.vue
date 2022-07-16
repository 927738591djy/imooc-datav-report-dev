<template>
  <div class="mapview">
    <div class="map-left">
      <BMap></BMap>
    </div>
    <div class="right">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">用户月同比增长</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div id="liquidfill"></div>
          </div>
        </template>
      </el-card>
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">热门搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div id="wordcloud"></div>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
import 'echarts-liquidfill'
import 'echarts-wordcloud'
import BMap from '@/views/BMap.vue'
import { wordcloud, mapScatter } from '@/api'

export default {
  name: 'MapView',
  components: {
    BMap
  },
  data () {
    return {
      liquidData: [0.6],
      wordcloudData: null,
      mapScatterData: null,
      wordCloudData: [
        {
          name: '华莱士',
          value: 366
          // // Style of single text
          // textStyle: {}
        },
        {
          name: '锅包肉',
          value: 456
        },
        {
          name: '串串香',
          value: 100
        },
        {
          name: '螺蛳粉',
          value: 300
        }
      ]
    }
  },
  methods: {
    async getWordcloud () {
      const result = await wordcloud()
      console.log(result)
      this.wordcloudData = result.data.data
    },
    async getMapScatter () {
      const result = await mapScatter()
      console.log(result)
      this.mapScatterData = result.data.data
      return this.mapScatterData
    }
  },
  mounted () {
    this.getWordcloud()
    this.getMapScatter()
    const chartDom = document.getElementById('liquidfill')
    const chart = this.$echarts.init(chartDom) // 到此步完成echarts的初始化
    chart.setOption({
      series: [
        {
          type: 'liquidFill',
          data: this.liquidData
        }
      ]
    })
    const chartDom2 = document.getElementById('wordcloud')
    const chart2 = this.$echarts.init(chartDom2) // 到此步完成echarts的初始化
    chart2.setOption({
      series: [
        {
          type: 'wordCloud',
          data: this.wordCloudData,
          shape: 'circle'
        }
      ]
    })
  }
}
</script>

<style lang="scss" scoped>
.mapview {
  display: flex;
  margin-top: 20px;
  .map-left {
    flex: 0 0 80%;
    width: 80%;
    height: 800px;
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    .title {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
    }
    .chart-wrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 290px;
      #liquidfill {
        width: 400px;
        height: 400px;
      }
      #wordcloud {
        width: 400px;
        height: 400px;
      }
    }
  }
}
</style>
