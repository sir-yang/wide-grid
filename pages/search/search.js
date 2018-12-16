// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        searchVal: ''
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

    // 搜索点击事件
    searchEvent(event) {
        let dataset = event.currentTarget.dataset;
        if (dataset.types === 'click') {//点击热搜词
            this.setData({
                searchVal: dataset.val
            })
        } else if (dataset.types === 'cancel') {//取消搜索
            this.setData({
                searchVal: ''
            })
        } else if (dataset.types === 'search') {//搜索
            let val = event.detail.value;
            console.log(val);
        }
    }
})