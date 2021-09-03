const withImages = require('next-images')
/** @type {import('next').NextConfig} */
module.exports = withImages({
  esModule: true,
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'pt', 'es'],
    defaultLocale: 'en'
  }
})
