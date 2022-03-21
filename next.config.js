const withImages = require('next-images')
module.exports = withImages({
  name: "[name].[hash:base64:8].[ext]",
  images: {
    disableStaticImages: true
},
  webpack(config, options) {
    return config
  }
})

module.exports.basePath='/aline-blog'
