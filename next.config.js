/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[ {
      protocol: 'https',
      hostname: 'links.papareact.com',
    },],
  },
  env:{
    mapbox_key:'pk.eyJ1IjoiYWxwaGF3YWthIiwiYSI6ImNsb2hhdGc1NzAyYnAyanBkazF0azBwYzQifQ.Giss7z7SXFqQQ8BCsXDXng'
  }
}

module.exports = nextConfig
