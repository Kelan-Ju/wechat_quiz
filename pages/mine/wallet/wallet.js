// pages/wallet/wallet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  backClick: function (e) {
    wx.navigateBack({})
  },

  itemClick: function (e) {
    var index = e.currentTarget.dataset.index
    if (index == '0') {   //提现
      wx.showModal({
        title: '需要先上传你的微信收款码',
        content: '微信->我的->钱包->收付款->二维码收款->保存收款码，再上传此收款码',
        confirmText: "去上传",
        success: function (res) {
          if (res.confirm) { //用户点击确定
            
          }
        }
      })
    } else if (index == '1') {            //兑换奖品
      wx.navigateTo({
        url: 'exchange/exchange',
      })
    }
  }
})