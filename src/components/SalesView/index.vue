<template>
  <div class="sales-view">
    <!-- :body-style="{padding:0}"把默认的边距清楚 -->
    <el-card :body-style="{ padding: '0 0 20px 0' }">
      <template v-slot:header>
        <div class="menu-wrapper">
          <!-- mode="horizontal"让菜单项水平排-->
          <!-- 要设置选中状态需要给每个菜单项设置index -->
          <!-- default-active="1"设置默认选中状态 -->
          <!-- @select="onMenuSelect"当我们修改menu选择时候调用onMenuSelect事件 -->
          <el-menu
            class="sales-view-menu"
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">返问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <!-- v-model="radioSelect"指定默认选项，我们点别的，也会默认修改 -->
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="今月"></el-radio-button>
              <el-radio-button label="本年"></el-radio-button>
            </el-radio-group>
            <el-date-picker
              type="daterange"
              v-model="date"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="small"
              :picker-options="pickerOptions"
              unlink-panels
              class="sales-view-date-picker"
            ></el-date-picker>
            <!-- unlink-panels消除左右日期点击时侯的联动 -->
            <!-- picker-options="pickerOptions" 是对象，代表左侧快捷选项 -->
          </div>
        </div>
      </template>
      <!-- 中间部分图表加列表 -->
      <template>
        <div class="sales-view-chart-wrapper">
          <v-echart :option="chartOption"></v-echart>
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class="list-item-wrapper">
              <div
                class="sales-view-item"
                v-for="item in rankData"
                :key="item.no"
              >
                <!-- :class="['list-item-no',+item.no <= 3 ? 'top-no':'']"  -->
                <!-- :class动态class数组写法，前面的是原来的样式，后面是动态绑定的样式，他们都是数组元素 -->
                <div :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']">
                  {{ item.no }}
                </div>
                <div class="list-item-name">{{ item.name }}</div>
                <div class="list-item-money">{{ item.money }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SalesView',
  data () {
    return {
      activeIndex: '1', // 把菜单项默认选中状态定义出来
      radioSelect: '今日',
      date: null,
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {
              const start = new Date()
              const end = new Date()
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick (picker) {
              const start = new Date()
              const end = new Date()
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const start = new Date()
              const end = new Date()
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      chartOption: {
        title: {
          text: '年度销售额',
          textStyle: {
            fontSize: 12,
            color: '#666'
          },
          left: 25,
          top: 20
        },
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#999'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#eee'
            }
          }
        },
        series: [{
          type: 'bar',
          barWidth: '35%',
          data: [100, 200, 256, 475, 283, 682, 783, 199, 928, 273, 133, 344]
        }],
        color: ['#3398DB'],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50
        }
      },
      rankData: [
        {
          no: 1,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 2,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 3,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 4,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 5,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 6,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 7,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 8,
          name: '麦当劳',
          money: '323,234'
        }
      ]
    }
  },
  methods: {
    onMenuSelect (index) {
      // 当修改menu选择时
      // index就是我们点击菜单项的index
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.sales-view {
  margin-top: 20px;
  .menu-wrapper {
    position: relative;
    display: flex;
    .sales-view-menu {
      width: 100%;
      padding-left: 20px;
      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
    .menu-right {
      position: absolute;
      display: flex;
      right: 20px;
      top: 0;
      height: 50px;
      justify-content: flex-end;
      align-items: center;
      .sales-view-date-picker {
        margin-left: 20px;
      }
    }
  }
  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;
    .echarts {
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }
    .sales-view-list {
      flex: 1;
      width: 100%;
      // height: 100%;
      overflow: hidden;
      margin-top: 15px;
      .sales-view-title {
        margin-top: 20px;
        font-size: 12px;
        color: #666;
        font-weight: 500;
      }
    }
    .list-item-wrapper {
      margin-top: 15px;
      .sales-view-item {
        display: flex;
        align-items: center;
        font-size: 12px;
        height: 20px;
        padding: 6px 20px 6px 0;
        .list-item-no {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          color: #333;
        }
        .top-no {
          background-color: #000;
          border-radius: 50%;
          color: #fff;
        }
        .list-item-name {
          margin-left: 10px;
          color: #333;
        }
        .list-item-money {
          flex: 1;
          text-align: right;
        }
      }
    }
  }
}
</style>
