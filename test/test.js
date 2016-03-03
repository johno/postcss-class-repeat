import fs from 'fs'
import test from 'ava'
import postcss from 'postcss'
import classRepeat from '../'

test('postcss-class-repeat', t => {
  t.plan(2)
  testFixture(t, 'input.css', 'output.css')
  testFixture(t, 'input.css', 'output-repeat-multiple.css', { repeat: 4 })
})

function fixture (name) {
  return fs.readFileSync('fixtures/' + name, 'utf8')
}

function testFixture (t, input, output, opts) {
  const result = postcss([ classRepeat(opts) ])
      .process(fixture(input))

  t.same(result.css, fixture(output))
}
