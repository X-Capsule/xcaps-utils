const fs = require('fs');
const yaml = require('js-yaml');

const DEFAULT_ENCODING = 'utf8';

/**
 * @method load
 * @description require yaml file
 * @param {object} options
 * @param {string} options.filePath - 提供的 yaml 文件路径
 * @param {string} [options.encoding] - yaml 文件编码
 * @param {string} [options.mode] - loading yaml mode (reserved)
 */
function load(options = {}) {
  const { filePath, encoding } = options;
  const filename = fs.readFileSync(filePath, encoding || DEFAULT_ENCODING);
  // currently we only support safeLoad for loading yaml
  return yaml.safeLoad(filename);
}

module.exports = {
  load,
};
