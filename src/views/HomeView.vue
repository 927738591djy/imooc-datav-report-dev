<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
    <bottom-View></bottom-View>
    <map-view></map-view>
  </div>
</template>

<script>
import TopView from '@/components/TopView/index.vue'
import SalesView from '@/components/SalesView/index.vue'
import MapView from '@/components/MapView/index.vue'
import BottomView from '@/components/BottomView/index.vue'
import { screenData } from '@/api'

export default {
  name: 'HomeView',
  data () {
    return {
      ScreenData: null
    }
  },
  components: {
    TopView,
    SalesView,
    MapView,
    BottomView
  },
  mounted () {
    this.getScreenData()
  },
  methods: {
    async getScreenData () {
      const result = await screenData()
      console.log(result)
      this.ScreenData = result.data.data
      return this.ScreenData
    }
  }
}
</script>

<style>
.home {
  width: 100%;
  /* height: 100%; */
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
