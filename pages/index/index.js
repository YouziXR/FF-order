//index.js
//获取应用实例
const app = getApp();
var serverPath = 'http://10.82.141.37:8080/demo/superadmin/login';

Page({
  data: {
    userID: '',
    userPWD: '',
  },
  //事件处理函数

  /**
   * 输入用户名时调用的函数
   */
  nameInput: function(e){
    this.setData({
      userID: e.detail.value
    })
  },
  /**
   * 输入密码时调用的函数
   */
  pwdInput: function(e){
    this.setData({
      userPWD: e.detail.value
    })
  },
  /**
   * 点击登录时调用的函数
   */
  logIn: function(e){
    // console.log(this.data.userID)
    // console.log(this.data.userPWD)
    var that = this;
    wx.request({
      url: serverPath,
      // method: 'GET',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      // 传递的数据
      data: {
        userid: that.data.userID,
        password: that.data.userPWD,
      },
      success: function(res){
        // console.log('success + ' + res.data);
        // console.log(userid);
        // console.log(password);
        var OAID = that.data.userID;
        // console.log(OAID);
        // 测试时设置res.data='Normal'

        // 用户有两类，A类为普通用户（Normal），B类为行政（Admin）
        // console.log(res.data)
        var receiveData = res.data;
        console.log('login 返回的数据' + receiveData.success);
        // receiveData.success = 'super';
        // receiveData.success = "normal";
        if(receiveData.success === "normal"){
          wx.showToast({
            title: '登录成功',
            icon: 'success'
          });
          wx.navigateTo({
            // 跳转到下一个页面，并传递OAID
            url: '../page_1/page_1?OAID=' + OAID,
          })
        }
      // 管理员账户（行政人员）
        if(receiveData.success === "super") {
          wx.showToast({
            title: '登录成功',
            icon: 'success'
          });
          wx.navigateTo({
            // 跳转到下一个页面
            url: '../admin/admin',
          })
        } 
        if(receiveData.fail == false){
          wx.showToast({
            title: '用户名或密码错误',
            icon: 'none'
          })
        }
      },
      fail: function(res){
        console.log('connect fail + ' + err);
      },
    })
  },

})
