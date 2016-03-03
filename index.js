'use strict'

var postcss = require('postcss')
var classRepeat = require('class-repeat')
var isPresent = require('is-present')
var hasClass = require('has-class-selector')

module.exports = postcss.plugin('postcss-class-repeat', function (opts) {
  return function classRepeatPlugin (root, result) {
    root.walkRules(function (node) {
      if (isPresent(node.selectors)) {
        node.selectors = node.selectors.map(function (selector) {
          return hasClass(selector) ? classRepeat(selector, opts) : selector
        })
      }
      return node
    })
  }
})

// css-shorthand-expand doesn't yet support all shorthands
function isSupportedShorthand (shorthand) {
  return ['background', 'font', 'padding', 'margin', 'border', 'border-width',
          'border-style', 'border-color', 'border-top', 'border-right', 'border-left',
          'border-bottom'].indexOf(shorthand) >= 0
}

function getExpansionFailureDescription (decl, result) {
  result.warn(
    'postcss-shorthand-expand failed to expand a property ' +
    decl.prop + ': ' + decl.value + ';',
    { node: decl }
  )
}
