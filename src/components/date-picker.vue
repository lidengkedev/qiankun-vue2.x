<template>
  <div>
    <section class="container">
			<div class="ldk-date-container">
				<div class="ldk-date-header">
					<span class="ldk-date-prev" @click="prevMonth">&lt;</span>
					<div class="ldk-date-text">{{ YEAR }}年 {{ MONTH + 1 }}月</div>
					<span class="ldk-date-next" @click="nextMonth">&gt;</span>
				</div>
				<div class="ldk-date-body">
					<ul class="ldk-day-header">
						<li class="ldk-day-item" v-for="item in dateheader" :key="item">{{ item }}</li>
					</ul>
					<ul class="ldk-day-body">
						<li class="ldk-day-item" v-for="(item, index) in datebody" :key="index" :class="item.classname" @click="clickDay(item.value)">{{ item.value }}</li>
					</ul>
				</div>
				<div class="ldk-date-footer"></div>
			</div>
		</section>
  </div>
</template>

<script>
  export default {
    name: 'date-picker',
    data() {
      return {
        YEAR: '',
				MONTH: '',
				DATE: '',
				datetitle: '',
				dateheader: ['一', '二', '三', '四', '五', '六', '日'],
				datebody: []
      }
    },
    methods: {
      /**
			 * 判断今年是否是闰年
			 * 1、能被400整除，是闰年
			 * 2、能被4整除且不能被100整除，是闰年
			 */
			isGoodYear (year) {
				return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
			},
			/**
			 * 获取当前月份的第一天是星期几
			 */
			getMonthFirstDay (year, month) {
				return (new Date(year, month, 1)).getDay()
			},
			/**
			 * 获取当前月份总共有多少天
			 */
			getMonthDays (year, month) {
				return [31, this.isGoodYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
			},
			/**
			 * 初始化日历
			 */
			initDate (year, month, day) {
				let firstDay = this.getMonthFirstDay(year, month),
					monthDays = this.getMonthDays(year, month),
					rows = Math.ceil((firstDay + monthDays)/7)
				this.datebody = []
				for (let i = 0; i < rows; i++) {
					for (let d = 0; d < 7; d++) {
						let dayIndex = i * 7 + d,
							dateDay = dayIndex - firstDay + 2
						if (dateDay <= 0) {
							this.datebody.push({ classname: 'prev-month', value: undefined })
						} else if (dateDay > monthDays) {
							this.datebody.push({ classname: 'next-month', value: undefined })
						} else if (dateDay === day && year == (new Date()).getFullYear() && month == (new Date()).getMonth()) {
							this.datebody.push({ classname: 'current-day', value: dateDay })
						} else {
							this.datebody.push({ classname: 'other-day', value: dateDay })
						}
					}
				}
			},
			prevMonth () {
				if (this.MONTH < 1) {
					this.MONTH = 11
					this.YEAR--
				} else {
					this.MONTH--
				}
				this.initDate(this.YEAR, this.MONTH, this.DATE)
			},
			nextMonth () {
				if (this.MONTH >= 11) {
					this.MONTH = 0
					this.YEAR++
				} else {
					this.MONTH++
				}
				this.initDate(this.YEAR, this.MONTH, this.DATE)
			},
			clickDay (day) {
				if (day) {
					alert(this.YEAR + '年' + (this.MONTH + 1) + '月' + day + '日')
				}
			}
		},
		mounted () {
			let now_date 	= new Date(),
				NOW_YEAR 	= now_date.getFullYear(),	// 年份
				NOW_MONTH 	= now_date.getMonth(),		// 月份
				NOW_DATE 	= now_date.getDate()		// 天数
			this.YEAR 	= NOW_YEAR
			this.MONTH 	= NOW_MONTH
			this.DATE 	= NOW_DATE
			this.initDate(NOW_YEAR, NOW_MONTH, NOW_DATE)
		}
  }
</script>

<style lang="scss" scoped>
.container {
	min-height: 700px;
}
.ldk-date-container {
	width: 266px;
	margin: 0 auto;
	border: 1px solid #eaeaea;
	background-color: #FFF;
}
.ldk-date-header {
	padding: 0 20px;
	height: 38px;
	line-height: 38px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #eaeaea;
	background-color: #f8f8f8;
}
.ldk-date-header .ldk-date-prev,
.ldk-date-header .ldk-date-next {
	-moz-user-select: none;
	-ms-user-select: none;
	-webkit-user-select: none;
	cursor: pointer;
}
.ldk-day-header {
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
}
.ldk-day-header .ldk-day-item {
	width: 100%;
	height: 32px;
	line-height: 32px;
	text-align: center;
}
.ldk-day-body {
	padding: 0 20px 20px;
}
.ldk-day-body .ldk-day-item {
	display: inline-block;
	width: 32px;
	height: 32px;
	line-height: 32px;
	text-align: center;
}
.ldk-day-body .ldk-day-item.other-day {
	cursor: pointer;
}
.ldk-day-body .ldk-day-item.other-day:hover {
	color: #FFF;
	background-color: #52ccba;
}
.ldk-day-body .ldk-day-item.current-day {
	color: #FFF;
	background-color: #52ccba;
}
.ldk-day-body .ldk-day-item.prev-month,
.ldk-day-body .ldk-day-item.next-month {
	vertical-align: top;
}
</style>
