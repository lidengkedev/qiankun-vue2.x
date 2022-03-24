<template>
  <div>
		<div class="webSocket-connection">
			服务地址：
			<input v-model="webSocketAddress" type="text">
			<input type="button" name="" id="" value="连接" placeholder="请输入服务地址,如：ws://xxx" @click="createWebSocket" />
			<input type="button" name="" id="" value="断开" @click="closeWebSocket" />
		</div>
		<section class="websocket-warper">
			<div class="websocket-left">
				<h2>小强</h2>
				<div id="section-question">
					<textarea
						v-model="leftMessage"
						@keyup.ctrl.enter="sendLeftMessage"
						class="submit-text"
						id="person1"
						rows="5"
						cols=""
						placeholder="ctrl + enter 发送消息"></textarea>
				</div>
			</div>
			<div class="webSocket-message" id="webSocket-message">
				<p 
					v-for="(item, index) in messageList"
					:key="index" 
					:class="[item.type == 1 ? 'webScoket-left-message' : 'webSocket-right-message']">
					{{ item.message }}
				</p>
				<span 
					v-show="isConnection"
					class="tip-message">
					{{ webSocketTipMessage }}
				</span>
			</div>
			<div class="websocket-right">
				<h2>小红</h2>
				<div id="section-question">
					<textarea 
						v-model="rightMessage" 
						@keyup.ctrl.enter="sendRightMessage"
						class="submit-text" 
						id="person2" 
						rows="5" 
						cols="" 
						placeholder="ctrl + enter 发送消息"></textarea>
				</div>
			</div>
		</section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        webSocketStatus: 0,
				webSocketTipMessage: '未连接服务',
				webSocketAddress: '',
				leftMessage: '',
				rightMessage: '',
				ws: null,
				messageList: []
      }
    },
    computed: {
      isConnection () {
				return this.webSocketStatus == 0 || this.webSocketStatus == 2 || this.webSocketStatus == 3 ? true : false
			}
    },
    methods: {
      createWebSocket () {
				if (this.webSocketAddress) {
					this.ws = new WebSocket(this.webSocketAddress)
					this.webSocketStatus = this.ws.readyState
					if (this.webSocketStatus == 1) {
						console.log('连接已打开')
						this.getWebSocketMessage()
					} else {
						alert('连接打开失败')
					}
				} else {
					alert('请输入服务地址,如：ws://xxx')
				}
			},
			sendLeftMessage () {
				if (this.ws) {
					this.ws.send(JSON.stringify({type: 1, message: this.leftMessage}))
					this.leftMessage = ''
				} else {
					alert('未连接服务')
				}
			},
			sendRightMessage () {
				if (this.ws) {
					this.ws.send(JSON.stringify({type: 2, message: this.rightMessage}))
					this.rightMessage = ''
				} else {
					alert('未连接服务')
				}
			},
			getWebSocketMessage () {
				this.ws.onmessage = (socket) => {
					let data = JSON.parse(socket.data)
					this.messageList.push({
						type: data.type,
						message: data.message
					})
				}
			},
			closeWebSocket () {
				if (this.ws) {
					this.ws.close()
					this.webSocketStatus = this.ws.readyState
					console.log('连接已关闭')
				} else {
					alert('请先连接服务')
				}
			}
    }
  }
</script>

<style lang="scss" scoped>
input {
	outline: none;
	background-color: transparent;
}
h1 {
	text-align: center;
	margin-bottom: 60px;
}
.webSocket-connection {
	text-align: center;
	margin-bottom: 60px;
}
.websocket-warper {
	white-space: nowrap;
	.websocket-left {
		width: 40%;
		box-sizing: border-box;
		display: inline-block;
		vertical-align: top;
		text-align: center;
	}
	.websocket-right {
		width: 40%;
		box-sizing: border-box;
		display: inline-block;
		vertical-align: top;
		text-align: center;
	}
	.webSocket-message {
		padding: 20px;
		width: 20%;
		min-height: 500px;
		display: inline-block;
		vertical-align: top;
		border: 1px solid #EAEAEA;
		border-radius: 5px;
		box-sizing: border-box;
	}
}
.submit-text {
	width: 80%;
}
.webScoket-left-message {
	padding: 0 10px;
	text-align: left;
}
.webSocket-right-message {
	padding: 0 10px;
	text-align: right;
}
.tip-message {
	display: inline-block;
	text-align: center;
	width: 100%;
	color: rgba(0,0,0,0.4);
}
</style>
