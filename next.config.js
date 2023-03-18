
const dns = require("dns");

dns.setDefaultResultOrder("ipv4first")

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
    experimental: {
      appDir: true,
    },
  images : {
    domains : ['rb.gy', 'upload.wikimedia.org', 'www.gravatar.com', "www.nicepng.com", "cdn.sanity.io", "lh3.googleusercontent.com"]
  }
}

