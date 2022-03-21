const withImages = require('next-images')
module.exports = withImages({
  name: "[name].[hash:base64:8].[ext]",
  images: {
    disableStaticImages: true
},
assetPrefix:'/aline-blog',
basePath:'/aline-blog',

  webpack(config, options) {
    return config
  }
})

