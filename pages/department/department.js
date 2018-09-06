// pages/department/department.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: 'TEST,TEST,TEST',
    index: -1,
    departments: ['IT部', '人事部', '行政部'],
    OAID:'',
    objDepartments: [{
      id: 0,
      name: 'IT部',
    },
    {
      id: 1,
      name: '人事部',
    },
    {
      id: 2,
      name: '行政部',
    }],
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.data.msg)
    this.data.OAID = options.OAID;
    console.log(this.data.OAID);
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
  /**
   * IT部门
   */
  itDepart: function(){
    wx.navigateTo({
      url: '../employee/employee',
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    /**
     * 向服务器发送请求
     */
  },
})