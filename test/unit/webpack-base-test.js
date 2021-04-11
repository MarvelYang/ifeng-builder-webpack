const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base');

  // console.log(baseConfig);

  it('entry', () => {
    assert.strictEqual(
      baseConfig.entry.index,
      '/Users/ifeng/Documents/workspace/my-webpack/builder-webpack/test/smoke/template/src/index/index.js',
    );
    assert.strictEqual(
      baseConfig.entry.search,
      '/Users/ifeng/Documents/workspace/my-webpack/builder-webpack/test/smoke/template/src/search/index.js',
    );
  });
});
