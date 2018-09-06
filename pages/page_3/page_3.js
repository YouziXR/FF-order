// pages/page_3/page_3.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    reserve_type:'',//订餐类型
    user_oa: '',//提交人
    d_id: '', //部门id
    d_name: '', //部门名称
    count: '',//部门已订餐数
    remarks: '',
    submit_data: ''//需要提交的数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options),
      this.setData({
        d_id: options.d_id,
        d_name: options.d_name,
        count: options.count,
        user_oa: options.user_oa,
        reserve_type:options.reserve_type
      })
      //console.log(this.data)
  },
  openConfirm: function (options) {
    //console.log(options.detail.value)
    this.setData({ submit_data: options.detail.value })
    var that = this;
    wx.showModal({
      title: '订单确定',
      content: that.data.d_name + '订餐' + that.data.submit_data.order_count+'份',
      confirmText: "确定",
      cancelText: "取消",
      success: function (res) {
        // console.log(res);
        if (res.confirm) {
          that.mysubmit()
        } else {
          console.log('用户点击辅助操作')
        }
      }
    });
  },
  /**
   * 用户提交信息
   */
  mysubmit: function () {
    var that = this
    //console.log(this.data.submit_data.remarks)
    wx.request({
      url: "http://10.82.141.37:8080/demo/superadmin/order",
      data: {
        user_oa: that.data.user_oa,
        d_id: that.data.d_id,
        order_count: that.data.submit_data.order_count,
        remarks: that.data.submit_data.remarks,
        reserve_type:that.data.reserve_type
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
       // console.log(res.data.code)
        if (res.data.code == 1)//code=1 订单成功
        {
          setTimeout(function () {
            wx.redirectTo({
              url: '../page_2/page_2?user_oa=' + that.data.user_oa+'&reserve_type='+that.data.reserve_type,
            })
          }, 500) //延迟时间
          //console.log('返回1'+res.data.code)
          wx.showToast({
            title: '订餐成功',
            icon: '',
            duration: 500
          });

        }
        else if (res.data.code == -1) {
          wx.showToast({
            title: '订单失败',
          })
          wx.redirectTo({
            url: '../page_2/page_2?OAID=' + that.data.user_oa,
          })
        }

      },
      fail: function (res) {
        console.log(res)
      }

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

  },
})