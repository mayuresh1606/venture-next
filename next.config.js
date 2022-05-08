/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    MONGODB_URI:"mongodb+srv://MERN:MERN-PROJECTS@cluster0.olnvi.mongodb.net/Venture-Next?retryWrites=true&w=majority"
  },
  reactStrictMode: true,
}

module.exports = nextConfig
