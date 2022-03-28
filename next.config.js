const withImages = require('next-images')
const isProd = (process.env.environment||"").toLocaleLowerCase() == "production"

const path = isProd ?'/aline-blog': undefined
module.exports = withImages({
  name: "[name].[hash:base64:8].[ext]",
  images: {
    disableStaticImages: true
},
assetPrefix:path,
basePath:path,

  webpack(config, options) {
    return config
  }
})

