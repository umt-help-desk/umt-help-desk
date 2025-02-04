/**@type {import('next').NextConfig}*/
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  assetPrefix: isProd ? '/umt-help-desk.github.io/' : '',
  basePath: isProd ? '/umt-help-desk.github.io' : '',
  trailingSlash: true,
};
module.exports = nextConfig
/**const nextConfig = {
}*/
