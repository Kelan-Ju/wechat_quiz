// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getOpenId()
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

  backClick: function(e) {
    wx.navigateBack({})
  },

  // 获取openid
  getOpenId: function() {
    //调用登录接口
    //1.小程序调用wx.login得到code.
    wx.login({
      success: function (res) {
        var code = res['code'];
        //2.小程序调用wx.getUserInfo得到rawData, signatrue, encryptData.
        console.log('*******************')
        wx.getUserInfo({
          success: function (info) {
            console.log('调用登录接口*****',info);
            var rawData = info['rawData'];
            var signature = info['signature'];
            var encryptData = info['encryptData'];
            var encryptedData = info['encryptedData']; //注意是encryptedData不是encryptData...坑啊
            var iv = info['iv'];

            //3.小程序调用server获取token接口, 传入code, rawData, signature, encryptData.
            wx.request({
              url: constants.LOGIN_URL,
              data: {
                "code": code,
                "rawData": rawData,
                "signature": signature,
                "encryptData": encryptData,
                'iv': iv,
                'encryptedData': encryptedData
              },
              success: function (res) {
                if (res.statusCode != 200) {
                  wx.showModal({
                    title: '登录失败'
                  });
                }
                typeof func == "function" && func(res.data);
              }
            });
          }
        });

      }
    })
  },

  itemClick: function(e) {
    var index = e.currentTarget.dataset.index
    switch (index) {
      case '0': // 我的钱包
          wx.navigateTo({
            url: 'wallet/wallet',
          });
        break;
      case '1': // 得利排行
          wx.navigateTo({
            url: 'ranking/ranking',
          });
        break;
      case '2': // 我的订单
          wx.navigateTo({
            url: 'order/order',
          });
        break;
      case '3': // 收货地址
          wx.navigateTo({
            url: 'address/address',
          });
        break;
    }
  }
})