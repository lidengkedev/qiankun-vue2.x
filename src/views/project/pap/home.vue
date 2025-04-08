<template>
  <div id="home">
    <section class="section-parent">
      <section class="section">
        <div>
          <div class="common-title">
            <label> 公安数据量 </label>
          </div>
        </div>
        <div class="common-contrainer"></div>
      </section>
      <section class="section">
        <div>
          <div class="common-title">
            <label> 社会数据量 </label>
          </div>
        </div>
        <div class="common-contrainer"></div>
      </section>
      <section class="section">
        <div>
          <div class="common-title">
            <label> 数据来源 </label>
          </div>
        </div>
        <div class="common-contrainer"></div>
      </section>
      <section class="section">
        <div>
          <div class="common-title">
            <label> 月度访问量 </label>
          </div>
        </div>
        <div class="common-contrainer"></div>
      </section>
    </section>
    <section class="section-parent">
      <section class="section">
        <div class="section-child">
          批量比对
        </div>
      </section>
      <section class="section">
        <div class="section-child">
          蛛网分析
        </div>
      </section>
      <section class="section">
        <div class="section-child">
          话单管理
        </div>
      </section>
      <section class="section">
        <div class="section-child">
          对方号码频率统计
        </div>
      </section>
    </section>
    <section class="section-parent">
      <section class="section">
        <div class="section-child">
          布控申请管理
        </div>
      </section>
      <section class="section">
        <div class="section-child">
          卡口实时数据
        </div>
      </section>
      <section class="section">
        <div class="section-child">
          手机相互通话分析
        </div>
      </section>
      <section class="section">
        <div class="section-child">
          对方号码分小时统计
        </div>
      </section>
    </section>
    <section class="section-parent">
      <section class="section section-two">
        <div>
          <div class="common-title">
            <label> 重点人员地区分布 </label>
          </div>
        </div>
        <div class="common-contrainer"></div>
      </section>
      <section class="section section-two">
        <div>
          <div class="common-title">
            <label> 重点人员出省分析 </label>
          </div>
        </div>
        <div class="common-contrainer"></div>
      </section>
    </section>
    <section class="section-parent">
      <section class="section section-two">
        <div>
          <div class="common-title">
            <label> 治安案件数量对比分析 </label>
          </div>
        </div>
        <div class="common-contrainer"></div>
      </section>
      <section class="section section-two">
        <div>
          <div class="common-title">
            <label> 110警情监测 </label>
          </div>
        </div>
        <div class="common-contrainer"></div>
      </section>
    </section>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'home',
  props: ['headTitle'],
  data() {
    return {
      home: '主页显示信息！',
      police: {
        tooltip: {},
        grid: { left: '18%', bottom: '13%', top: '18%' },
        xAxis: {
          data: ['总量', '月增量'],
          axisLabel: { outside: true, textStyle: { color: '#646767' } },
          axisTick: { show: false },
          axisLine: { show: true, lineStyle: { color: '#dddddd', width: 1, type: 'solid' } },
          z: 10
        },
        yAxis: {
          show: true,
          name: '单位：万',
          nameLocation: 'end',
          nameTextStyle: { color: '#646767', fontFamily: '微软雅黑', fontSize: 12 },
          splitLine: { show: false },
          axisLabel: { outside: true, textStyle: { color: '#646767' } },
          axisLine: { show: true, lineStyle: { color: '#dddddd', width: 1, type: 'solid' } }
        },
        series: [{
          type: 'bar',
          itemStyle: { normal: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#7ae5f4' }, { offset: 0.5, color: '#64b8f9' }, { offset: 1, color: '#4e91fd' }]) } },
          barWidth: '60',
          data: [235756250 / 10000, 62256241 / 10000]
        }]
      }
    }
  },
  mounted() {
    echarts.init(document.getElementsByClassName('common-contrainer')[0]).setOption(this.police);
  },
  methods: {

  }
}
</script>

<style scoped>
#home {
  margin: 0px 86px;
  margin-bottom: 40px;
}

#home li {
  padding: 0px;
  line-height: 66px;
  display: inline-block;
}

#home .common-title {
  line-height: 40px;
}

#home .common-title label {
  font-weight: normal;
  font-size: 18px;
}

.section-parent {
  width: 100%;
}

.section {
  width: 25%;
  border-radius: 5px;
  display: inline-block;
  padding: 5px;
  box-sizing: border-box;
}

.section-two {
  width: 50%;
}

.section .section-child {
  background-color: #FFF;
  border-radius: 5px;
  padding: 40px 20px;
  text-align: center;
  font-weight: bolder;
  font-size: 20px;
}

@media only screen and (max-width: 1024px) {
  #app .app-header img {
    padding-right: 0px;
  }

  .section {
    width: 50%;
  }
}

@media only screen and (max-width: 768px) {
  #home {
    margin: 0px 10px;
    margin-bottom: 40px;
  }
}

@media only screen and (max-width: 425px) {
  .section {
    width: 100%;
  }
}
a {
color: #42b983;
cursor: pointer;
}

/* 组件公用样式 */
.common-style {
  margin: 0px 86px;
  background-color: #FFFFFF;
  border-radius: 5px;
}
/* 组件标题样式 */
.common-title {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  line-height: 30px;
  background-color: #e0e7f0;
}

.common-title label {
  font-weight: bold;
  padding-left: 20px;
}
/* 组件容器样式 */
.common-contrainer {
  height: 200px;
  text-align: center;
  background-color: #FFF;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.common-contrainer li {
  margin: 0px 10px;
}

@media only screen and (max-width: 768px) {
  .common-style {
    margin: 0px 10px;
    margin-bottom: 10px;
  }
}
</style>