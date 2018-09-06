// pages/page_2/page_2.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reserve_type:'',
    user_oa: '',
    departments: '',
    // departments: [{
    //     d_id: '28',
    //     d_name: 'sfgsdgsadfadfadfafaasd fasdfafa超级无敌无畏先锋超级老大IT部门',
    //     count: '0'
    //   },
    //   {
    //     d_id: '2',
    //     d_name: '人事部门',
    //     count: '12'
    //   },
    //   {
    //     d_id: '3',
    //     d_name: '行政部门',
    //     count: '13'
    //   }
    // ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      user_oa: options.user_oa,
      reserve_type:options.reserve_type
    })
    this.loaddepartments(); //请求数据

  },
  order_detail: function (e) {
    //console.log(e),//获取部门id,
    //console.log(e.currentTarget.dataset.remarks)//获取部门名称
    d_id: e.currentTarget.dataset.d_id
    wx.navigateTo({
      url: '../page_3/page_3?d_id=' + e.currentTarget.dataset.d_id + '&d_name=' + e.currentTarget.dataset.d_name + '&count=' + e.currentTarget.dataset.count +  '&user_oa=' + this.data.user_oa+'&reserve_type='+this.data.reserve_type
    })

  },

  loaddepartments: function () {
    var that = this
    wx.request({

      url: 'http://10.82.141.37:8080/demo/superadmin/department',
      data: {
        user_oa: this.data.user_oa,
        reserve_type:this.data.reserve_type
      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //var jsonText = JSON.parse(res.data);
        console.log(res.data)
        that.setData({
          departments: res.data
        })
      },
      fail: function (res) {
        that.setData({
          departments: []
        })
      }

    })
    //用户oa
  },
  chosse_other:function(){
    wx.navigateTo({
      url: '../page_1/page_1?OAID='+this.data.user_oa,
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