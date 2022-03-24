<template>
  <div class="app-container">
    <table class="table" width="100%" border="1" collspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>参数</th>
          <th>必填</th>
          <th>类型</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>appId</td>
          <td>是</td>
          <td>String</td>
          <td>当前应用的唯一标识</td>
        </tr>
        <tr>
          <td>type</td>
          <td>否</td>
          <td>String</td>
          <td>类型，目前只有一个选项 basic，默认值为 basic。</td>
        </tr>
        <tr>
          <td>style</td>
          <td>否</td>
          <td>String</td>
          <td>样式，可选项有 embed（默认）、inline、popup、oneclick 四种，具体效果可参见<a href="https://www.dingxiang-inc.com/business/captcha-online">线上demo</a>。</td>
        </tr>
        <tr>
          <td>inlineFloatPosition</td>
          <td>否</td>
          <td>String</td>
          <td>浮动层位置，仅当 style 的值为 inline 时有效，可选项有 up（默认）、down 两种，具体效果可参见线上demo。</td>
        </tr>
        <tr>
          <td>oneClickFloatPosition</td>
          <td>否</td>
          <td>String</td>
          <td>浮动层位置，仅当 style 的值为 oneclick 时有效，可选项有 up，当style值为oneclick且不传此参数，默认为弹出形式。</td>
        </tr>
        <tr>
          <td>width</td>
          <td>否</td>
          <td>Number</td>
          <td>控件（滑动条）宽度，单位为像素，默认为 300。</td>
        </tr>
        <tr>
          <td>language</td>
          <td>否</td>
          <td>String</td>
          <td>语言，可选项有 cn（默认，中文）、en（英文）</td>
        </tr>
        <tr>
          <td>success</td>
          <td>否</td>
          <td>Function</td>
          <td>验证成功时的回调函数，会传入一个参数，值为本次验证的 token:constId，接入方需在后续的验证中传回此项值。注：此回调函数包含无感验证成功及滑动验证成功。</td>
        </tr>
        <tr>
          <td>fail</td>
          <td>否</td>
          <td>Function</td>
          <td>验证失败时的回调函数，会传入一个参数，值为出错信息</td>
        </tr>
      </tbody>
    </table>
    <div>remote-js</div>
    <remote-js :src="'https://cdn.dingxiang-inc.com/ctu-group/captcha-ui/index.js'" :loaded="remoteJsLoaded"></remote-js>
    <div>
      <p>样式调整</p>
      <div class="style-item">
        样式：
        <button class="btn" @click="styleChange('embed')">embed</button>
        <button class="btn" @click="styleChange('inline')">inline</button>
        <button class="btn" @click="styleChange('popup')">popup</button>
        <button class="btn" @click="styleChange('oneclick')">oneclick</button>
      </div>
      <div class="style-item">
        宽度调整：
        <button class="btn" @click="widthChange(200)">200</button>
        <button class="btn" @click="widthChange(300)">300</button>
        <button class="btn" @click="widthChange(400)">400</button>
        <button class="btn" @click="widthChange(600)">600</button>
      </div>
    </div>
    <div class="style-item">
      浮动层位置:
      <button class="btn" @click="inlineFloatPositionChange('up')">up</button>
      <button class="btn" @click="inlineFloatPositionChange('down')">dowm</button>
    </div>
    <div class="style-item">
      语言:
      <button class="btn" @click="languageChange('cn')">中文</button>
      <button class="btn" @click="languageChange('en')">英文</button>
    </div>
    <div class="style-item">
      背景色:
      <input type="color" @change="bgColorChange">
    </div>
    <div class="style-item">
      重置当前验证码:
      <button class="btn" @click="reload">重置</button>
      <button class="btn" @click="show">显示</button>
      <button class="btn" @click="hide">隐藏</button>
    </div>
    <div id="captcha" class="captcha"></div>
  </div>
</template>

<script>
import RemoteJs from '../../components/remote-js/index'
export default {
  components: { RemoteJs },
  data() {
    return {
      myCaptcha: null,
      style: 'embed',
      inlineFloatPosition: 'up',
      oneClickFloatPosition: 'up',
      width: 300,
      language: 'cn',
      bgColor: 'transparent'
    }
  },
  methods: {
    remoteJsLoaded() {
      this.captcha()
    },
    show() {
      this.myCaptcha.show()
    },
    hide() {
      this.myCaptcha.hide()
    },
    reload() {
      this.myCaptcha.reload()
    },
    bgColorChange(e) {
      this.bgColor = e.target.value
      this.captcha()
    },
    widthChange(width) {
      this.width = width
      this.captcha()
    },
    styleChange(style) {
      this.style = style
      this.captcha()
    },
    inlineFloatPositionChange(inlineFloatPosition) {
      this.inlineFloatPosition = inlineFloatPosition
      this.captcha()
    },
    languageChange(language) {
      this.language = language
      this.captcha()
    },
    captcha() {
      const { style, inlineFloatPosition, oneClickFloatPosition, width, language, bgColor } = this
      const _dx = window._dx || {}
      this.myCaptcha = _dx.Captcha(document.getElementById('captcha'), {
        appId: '3657937611284dbc1d1f13458ce920b5',
        style,
        inlineFloatPosition,
        oneClickFloatPosition,
        width,
        language,
        customStyle: {
          bgColor
        },
        success: (token) => {
          console.log({style, token})
        },
        fail: (err) => {
          console.log(err)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  border-spacing: 0;
  border-collapse: collapse;
}
.style-item {
  margin-bottom: 16px;
}
.btn {
  width: 80px;
  line-height: 24px;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  background-color: #f8f8f8;
  cursor: pointer;
}
</style>
