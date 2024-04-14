/** @type {import('next').NextConfig} */

// require('dotenv').config({path: "./src/lib/config/config.env"});
require('dotenv').config();
const nextConfig = {
    images:{
        remotePatterns:[
          {
            protocol: 'https',
            hostname: "images.pexels.com"
          },
          {
            protocol: 'https',
            hostname: "www.sistockphoto.com"
          },
          {
            protocol: 'https',
            hostname: "media.istockphoto.com"
          },
          {
            protocol: 'https',
            hostname: "images.unsplash.com"
          }
        ]
      }
}

module.exports = nextConfig
