
//获取应用实例
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    countTimer: null,
    currentPage: 0,
    content: [{
        page: 0,
        question: "风切变什么时候对飞机的安全危害最大？",
        answers: [{
            selected: false,
            title: "起飞和着陆时"
          },
          {
            selected: false,
            title: "转弯飞行时",
          },
          {
            selected: false,
            title: "爬升和下降"
          },
        ]
      },
      {
        page: 1,
        question: "非洲的第一大河是：",
        answers: [{
            selected: false,
            title: "刚果河",
          },
          {
            selected: false,
            title: "尼罗河",
          },
          {
            selected: false,
            title: "尼日尔河",
          },
          {
            selected: false,
            title: "赞比西河"
          },
        ]
      },
      {
        page: 2,
        question: "据不列颠百科全书所载，迄今为止世界上最大的百科全书是：",
        answers: [
          {
            selected: false,
            title: "辞海",
          },
          {
            selected: false,
            title: "四库全书",
          },
          {
            selected: false,
            title: "永乐大典",
          },
          {
            selected: false,
            title: "中国百科全书"
          },
        ]
      }
    ]
  },

  checkboxChange: function(e) {
    var page = e+1
    if (page <= this.data.content.length) {
      var that = this;
      setTimeout(function() {
        //要延时执行的代码
        if (page == that.data.content.length) { //表示所有闯关题答完
          wx.showModal({
            title: '恭喜你所有题目已答完',
            content: '现在你可以进入竞猜啦！',
            showCancel: false,
            confirmText: "进入竞猜",
            success: function(res) {
              if (res.confirm) { //用户点击确定
                wx.navigateTo({
                  url: '../quiz/quiz',
                })
              }
            }
          })
        } else {
          that.setData({ //正在回答闯关题
            currentPage: page
          })
          if (page >= 1) {
            // that.countdown()
            console.log('怎么回事：', that.countTimer)
            clearInterval(that.countTimer)
          }
          
          // wx.navigateTo({
          //   url: '../quiz/quiz',
          // })
        }
      }, 500)
    }
  },

  /**
   * 阻止swiper手动滑动
   */
  stopTouchMove: function() {},

  answerSelected: function(e) {
    var state = e.currentTarget.dataset.name.selected
    var page = e.currentTarget.dataset.page
    var index = e.currentTarget.dataset.index
    var data = 'content[' + page + '].answers[' + index + '].selected'
    this.setData({
      [data]: !state
    });
    this.checkboxChange(page);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.countdown()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // this.drawProgressbg()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  // 头像点击
  portraitClick: function(e) {
    wx.navigateTo({
      url: '../mine/mine',
    })
  },

  countdown: function () {
    var that = this
    var step = 1, //计数动画次数
      num = 0, //计数倒计时秒数（n - num）
      start = 1.5 * Math.PI, // 开始的弧度
      end = -0.5 * Math.PI, // 结束的弧度
      timer = that.data.countTimer

    var animation_interval = 1000, // 每1秒运行一次计时器
      n = 10; // 当前倒计时为10秒
    // 动画函数
    function animation() {
      if (step <= n) {
        end = end + 2 * Math.PI / n;
        ringMove(start, end);
        step++;
      } else {
        clearInterval(timer);
      }
    };
    // 画布绘画函数
    function ringMove(s, e) {
      var context = wx.createCanvasContext('secondCanvas')

      // var gradient = context.createLinearGradient(100, 50, 50, 100); 
      // gradient.addColorStop("0", "#2661DD");
      // gradient.addColorStop("0.5", "#40ED94");
      // gradient.addColorStop("1.0", "#5956CC");

      // 绘制圆环
      context.setStrokeStyle('#ffffff')
      // context.setStrokeStyle(gradient)
      context.beginPath()
      context.setLineWidth(5)
      // context.setLineCap('round')
      context.arc(21, 21, 15, s, e, true)
      context.stroke()
      context.closePath()

      // 绘制倒计时文本
      context.beginPath()
      context.setLineWidth(1)
      context.setFontSize(15)
      context.setFillStyle('#ffffff')
      context.setTextAlign('center')
      context.setTextBaseline('middle')
      context.fillText(n - num + '', 21, 21, 15)
      context.fill()
      context.closePath()

      context.draw()
    
      // 每完成一次全程绘制就+1
      num++;
    }
    // 倒计时前先绘制整圆的圆环
    ringMove(start, end);
    // 创建倒计时
    timer = setInterval(animation, animation_interval);
    that.setData({
      countTimer: timer
    })
    console.log('怎么回事000：', that.countTimer)
  },

  drawProgressbg: function () {
    // 使用 wx.createContext 获取绘图上下文 context
    var ctx = wx.createCanvasContext('canvasProgressbg')
    ctx.setLineWidth(5); // 设置圆环的宽度
    ctx.setStrokeStyle('#3d1f40'); // 设置圆环的颜色
    ctx.setLineCap('round') // 设置圆环端点的形状
    ctx.beginPath(); //开始一个新的路径
    ctx.arc(21, 21, 15, 0, 2 * Math.PI, false);
    //设置一个原点(100,100)，半径为90的圆的路径到当前路径
    ctx.stroke(); //对当前路径进行描边
    ctx.draw();
  }
})