<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">32,44,44</div>
                <v-echart :option="searchUserOption"></v-echart>
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">32,44,44</div>
                <v-echart :option="searchNumberOption"></v-echart>
              </div>
            </div>

            <div class="table-wrapper">
              <el-table :data="tableData">
                <!-- 让prop等于绑定的tableData的key就可以显示每一列的数据了 -->
                <el-table-column label="排名" prop="rank"></el-table-column>
                <el-table-column
                  label="关键词"
                  prop="kewword"
                ></el-table-column>
                <el-table-column
                  label="总搜索量"
                  prop="count"
                ></el-table-column>
                <el-table-column
                  label="搜索用户数"
                  prop="users"
                ></el-table-column>
              </el-table>
              <!-- layout="prev, pager, next"分页组件按照上，翻页，下排列 -->
              <!-- :total="100"分页组件总共展示100条数据 -->
              <!-- :page-size="4"每页展示四条数据 -->
              <!-- background自动填充每个页签的背景色 -->
              <!-- @current-change="onPageChange"翻页事件 -->
              <el-pagination
                layout="prev, pager, next"
                :total="100"
                :page-size="4"
                background
                @current-page="onPageChange()"
              ></el-pagination>
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <v-echart :option="categoryOptions"></v-echart>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomView',
  data () {
    return {
      searchUserOption: {
        xAxis: {
          type: 'category',
          boundaryGap: false, // 取消两边到x轴的边距
          data: [1, 2, 3, 4, 5]
        },
        yAxis: {
          show: false,
          min: 0,
          max: 600 // 看到图顶边了,给y轴设置最大值
        },
        series: {
          type: 'line',
          data: [100, 500, 455, 231, 333],
          // 要显示面积图设置areaStyle
          areaStyle: {
            color: 'rgba(95,187,255,.5)'
          },
          // lineStyle给线换颜色
          lineStyle: {
            color: 'rgb(95,187,255)'
          },
          itemStyle: {
            // 把点隐藏了
            opacity: 0
          },
          smooth: true
        },
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }
      },
      searchNumberOption: {
        xAxis: {
          type: 'category',
          boundaryGap: false, // 取消两边到x轴的边距
          data: [1, 2, 3, 4, 5]
        },
        yAxis: {
          show: false,
          min: 0,
          max: 600 // 看到图顶边了,给y轴设置最大值
        },
        series: {
          type: 'line',
          data: [100, 500, 455, 231, 333],
          // 要显示面积图设置areaStyle
          areaStyle: {
            color: 'rgba(95,187,255,.5)'
          },
          // lineStyle给线换颜色
          lineStyle: {
            color: 'rgb(95,187,255)'
          },
          itemStyle: {
            // 把点隐藏了
            opacity: 0
          },
          smooth: true
        },
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }
      },
      tableData: [
        {
          id: 1,
          rank: 1,
          kewword: '北京',
          count: 100,
          users: 90,
          range: '90%'
        },
        {
          id: 2,
          rank: 2,
          kewword: '北京',
          count: 100,
          users: 90,
          range: '90%'
        },
        {
          id: 3,
          rank: 3,
          kewword: '北京',
          count: 100,
          users: 90,
          range: '90%'
        },
        {
          id: 4,
          rank: 4,
          kewword: '北京',
          count: 100,
          users: 90,
          range: '90%'
        },
        {
          id: 5,
          rank: 5,
          kewword: '北京',
          count: 100,
          users: 90,
          range: '90%'
        }
      ],
      radioSelect: '品类',
      categoryOptions: {}
    }
  },
  methods: {
    onPageChange (page) {
      console.log(page)
      console.log(33)
    },
    renderPieChart () {
      // 直接在mockData中加入itemStyle修改颜色
      const mockData = [
        {
          legendname: '粉面粥店',
          value: 97,
          percent: '22.30%',
          itemStyle: {
            color: '#5085f2'
          },
          name: '粉面粥店 | 22.30% '
        },
        {
          legendname: '汉堡披萨',
          value: 92,
          percent: '21.15%',
          itemStyle: {
            color: '#e7e702 '
          },
          name: '汉堡披萨 | 21.15% '
        },
        {
          legendname: '烧烤小吃',
          value: 66,
          percent: '38.6%',
          itemStyle: {
            color: '#8d7fec'
          },
          name: '烧烤小吃 | 38.6% '
        }, {
          legendname: '紫菜蛋汤',
          value: 22,
          percent: '15.8%',
          itemStyle: {
            color: 'pink'
          },
          name: '紫菜蛋汤 | 15.8% '
        },
        {
          legendname: '包子烧卖',
          value: 45,
          percent: '22.30%',
          itemStyle: {
            color: 'green'
          },
          name: '包子烧卖 | 22.30% '
        }
      ]
      this.categoryOptions = {
        // 有两个标题，所以给title设为数组
        title: [
          {
            text: '品类分布',
            textStyle: {
              fontSize: 14,
              color: '#666'
            },
            left: 20,
            top: 20
          }, {
            text: '累计订单量',
            // subtext是副标题
            subtext: '320',
            // 调位置到圆环中间
            x: '34.5%',
            y: '42.5%',
            textAlign: 'center',
            textStyle: {
              fontSize: 14,
              color: '#999'
            },
            subtextStyle: {
              fontSize: 28,
              color: '#333'
            }
          }
        ],
        // 饼图不需要坐标系，直接写series
        // series也是个数组
        series: [
          {
            type: 'pie',
            data: mockData,
            // 设置饼图的伸出的小线条的对应文字
            label: {
              normal: {
                show: true,
                //  position: 'outter'，就是把每个饼对应的文字放在饼外面
                // position: 'inner',就是把每个饼对应的文字放在饼里
                formatter: function (params) {
                  return `${params.data.legendname} | ${params.data.percent}`
                  // return出去就显示了每个饼对应的文字
                }
              }
            },
            // center定义圆心位置,使得饼图位移
            center: ['35%', '50%'],
            // 设置radius让饼图变成空心图,前后数值是内圈半径,外圈半径
            radius: ['45%', '60%'],
            // labelLine设置饼图伸出来的线
            labelLine: {
              normal: {
                length: 5, // 靠近饼图的线是length
                length2: 2, // 靠近文字的线是length2
                // 让线平滑
                smooth: true
              }
            },
            // false就是让饼图按照数据逆时针排序,true就是按照数据顺时针排序
            clockwise: false,
            // 设置每个饼之间的空白
            itemStyle: {
              borderWidth: 4,
              borderColor: '#fff'
            },
            name: '品类分布'

          }
        ],
        // legend是旁边的彩色小方框,点击可以隐藏对应的饼,需要每个饼的对应数据中有name属性
        legend: {
          // 小方块可以滑动
          type: 'scroll',
          // 垂直排列
          orient: 'vertical',
          // 可以指定高度,小方块排不下会出现箭头
          height: 250,
          left: '70%',
          top: 'middle',
          textStyle: {
            color: '#8c8c8c'
          }

        },
        // tooltip是组件,就是鼠标移动到饼上面的弹层
        tooltip: {
          trigger: 'item', // 默认值,表示鼠标移到item上会触发
          // 可以自定义tooltip组件里面的内容
          formatter: function (params) {
            console.log(params)
            const str = params.seriesName + '<br />' +
                params.marker + params.data.legendname + '<br />' +
                '数量：' + params.data.value + '<br />' +
                '占比：' + params.data.percent + '%'
            return str
          }
        }
      }
    }
  },
  mounted () {
    this.renderPieChart()
  }
}
</script>

<style lang="scss" scoped>
.bottom-view {
  display: flex;
  margin-top: 20px;
  .view {
    flex: 1;
    &:first-child {
      padding: 0 10px 0 0;
    }
    &:last-child {
      padding: 0 0 0 10px;
    }
    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
      .title {
        font-size: 14px;
        font-weight: 500;
        color: #303133;
      }
      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }
    .chart-wrapper {
      display: flex;
      flex-direction: column;
      height: 452px;
      .chart-inner {
        height: 200px;
        display: flex;
        padding: 0 10px;
        margin-top: 20px;
        .chart {
          flex: 1;
          padding: 0 10px;
          .chart-title {
            color: #999;
            font-size: 14px;
          }
          .chart-data {
            margin-top: 10px;
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }
          .echarts {
            height: 50px;
          }
        }
      }
      .table-wrapper {
        flex: 1;
        .el-pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
