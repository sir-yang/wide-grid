// pages/columnDetail/columnDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        column_tk: 'hide',
        unlock_tk: 'hide',
        current: 0
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

    // 点击事件
    columnEvent(event) {
        let dataset = event.currentTarget.dataset;
        if (dataset.types === 'close') {
            let index = dataset.index;
            if (index == 1) {
                this.setData({
                    column_tk: 'hide'
                })
            } else {
                this.setData({
                    unlock_tk: 'hide'
                })
            }
        } else if (dataset.types === 'subscriptio') {//订阅
            this.setData({
                column_tk: 'show'
            })
        } else if (dataset.types === 'tab') {
            let index = dataset.index;
            let current = this.data.current;
            if (index == current) return; 
            this.setData({
                current: index
            })
        } else if (dataset.types === 'unlock') {
            this.setData({
                unlock_tk: 'show'
            })
        }
    }
})