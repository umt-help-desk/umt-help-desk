/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/umt-help-desk.github.io/' : '',
  basePath: isProd ? '/umt-help-desk.github.io' : '',
  trailingSlash: true,
};


/**const nextConfig = {
}

module.exports = nextConfig*/
