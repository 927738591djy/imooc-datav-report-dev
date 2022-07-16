// import request from '@/utils/request'
import axios from 'axios'

// 报表词云数据
export const wordcloud = () => axios.get('/screen/wordcloud')

// //报表地图散点数据
export const mapScatter = () => axios.get('/screen/map/scatter')

// 报表/大屏数据
export const screenData = () => axios.get('/screen/data')
