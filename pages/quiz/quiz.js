// pages/guess/guess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    quiz: {
      question: "英雄联盟OMG与SKT的总对决赛中，你认为对战比分是多少？",
      answer: [{
          selected: false,
          title: "3:0"
        },
        {
          selected: false,
          title: "3:2"
        },
        {
          selected: false,
          title: "2:1"
        }
      ]
    }
  },

  // 点击答案选项k
  answerSelected: function(e) {
    var index = e.currentTarget.dataset.index
    var state = e.currentTarget.dataset.state
    var data = 'quiz.answer[' + index + '].selected'
    this.setData({
      [data]: !state
    });
  },

  checkboxChange: function(e) {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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
  portraitClick: function (e) {
    wx.navigateTo({
      url: '../mine/mine',
    })
  }
})