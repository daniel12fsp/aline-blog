const withImages = require('next-images')
const isProd = (process.env.NODE_ENV||"").toLocaleLowerCase() == "production"

const path = isProd ?'/aline-blog': undefined
console.log({path})

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

