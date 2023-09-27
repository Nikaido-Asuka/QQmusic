module.exports = {
    rules: {
        //取消组件注册而未被使用而报错
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "vue/no-unused-components": "off"
      }
      
}