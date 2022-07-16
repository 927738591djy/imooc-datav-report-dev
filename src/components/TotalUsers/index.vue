<template>
  <div>
    <common-card title="累计用户数" value="1,087,503">
      <template>
       <v-echart :option="getOption()"></v-echart>
      </template>
      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">8.73%</span>
          <div class="increace"></div>
          <span class="month">月同比</span>
          <span class="emphasis">35.91%</span>
          <div class="decreace"></div>
        </div>
      </template>
    </common-card>
  </div>
<!-- <svg t="1657682644709" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9171" width="200" height="200"><path d="M499.904 270.912l-342.912 395.584a16 16 0 0 0 12.032 26.496H855.04a16 16 0 0 0 12.032-26.496l-342.912-395.52a16 16 0 0 0-24.192 0z" p-id="9172" fill="#45c946"></path></svg> -->
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin.js'
export default {
  name: 'TotalUsers',
  mixins: [commonCardMixin],
  methods: {
    getOption () {
      return {
        xAxis: {
          type: 'value', // 为了让柱状图从y轴出发
          show: false
        },
        yAxis: {
          type: 'category', // 为了让柱状图从y轴出发
          show: false
        },
        // 要两组数据
        series: [
          {
            type: 'bar',
            data: [19],
            barWidth: 10,
            stack: '总量', // stack属性可以把有关连的数据合并
            // 通过itemStyle定义对应柱子的颜色
            itemStyle: {
              color: '#45c946'
            }
          },
          {
            type: 'bar',
            data: [30],
            stack: '总量',
            itemStyle: {
              color: '#eee'
            }
          },
          {
          // 自定义图标系列，数据和左边那条柱子一致，也用stack合并
            type: 'custom',
            stack: '总量',
            data: [19],
            renderItem: (params, api) => {
            // params是图标有关的信息，api提供了很多方法
              const value = api.value(0) // value是data中的第一个元素
              console.log(value)
              const endPoint = api.coord([value, 0]) // x轴传入19，Y轴传入0 api.coord计算坐标
              //  endPoint就是坐标
              return {
                type: 'group', // 可以加个children变成一组图形
                children: [
                  {
                  // renderItem的返回值里面就是要绘制的图形
                    type: 'path',
                    position: endPoint, // 绘图的坐标
                    shape: {
                      d: 'M499.904 270.912l-342.912 395.584a16 16 0 0 0 12.032 26.496H855.04a16 16 0 0 0 12.032-26.496l-342.912-395.52a16 16 0 0 0-24.192 0z', // svg图标
                      x: -5,
                      y: 5, // x轴y轴的相对偏移量
                      width: 10,
                      height: 10,
                      layout: 'cover',
                      itemStyle: {
                        normal: {
                          color: '#1890ff'
                        }
                      }
                    }
                  },
                  {
                  // renderItem的返回值里面就是要绘制的图形
                    type: 'path', // 线段
                    position: endPoint, // 绘图的坐标
                    shape: {
                      d: 'M889.696 320.8H158.848l365.504 365.536 365.344-365.536z', // svg图标
                      x: -5,
                      y: -15, // x轴y轴的相对偏移量
                      width: 10,
                      height: 10,
                      layout: 'cover', // 伸展开来
                      style: {
                        fill: '#45c946' // 这个颜色不知道为啥没设置成功
                      }
                    }
                  }
                ]
              }
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

<style lang="scss">
.total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>
