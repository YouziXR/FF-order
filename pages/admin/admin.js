// pages/admin/admin.js

var serverPath = 'http://10.82.141.37:8080/demo/superadmin/summary';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderInfor: [],
    sum: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: serverPath,
      method: 'GET',
      // header: {
      //   'content-type': 'application/json'
      // },
      data: {

      },
      success: function(res){
        // console.log('get method success ' + res.data);
        console.log('summary返回的数据'+res.data)
        var receiveData = res.data;
        // 解构JSON数据
        var tmp = receiveData.departments;
        console.log(tmp);
        // receiveData.departments = '行政部';
        // receiveData.orderCounts = 10;
        // 临时存放订餐信息
        var tmpObj = that.data.orderInfor;
        // tmpObj.push(res.data);
        tmpObj.push(tmp);
        // console.log(tmpObj[0])
        // 临时存放总订餐数
        // var amount = 0;
        var tmpObj = tmpObj[0];
        that.setData({
          orderInfor: tmpObj,
          sum: receiveData.total,
        });
      },
    })
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
  
  }
})