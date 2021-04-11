const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base');

  it('entry', () => {
    assert.strictEqual(
      baseConfig.entry.index.includes('test/smoke/template/src/index/index.js'),
      true,
    );
    assert.strictEqual(
      baseConfig.entry.search.includes(
        'test/smoke/template/src/search/index.js',
      ),
      true,
    );
  });
});
