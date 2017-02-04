/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const React = require('react')
const ImmutableComponent = require('../../../js/components/immutableComponent')

class BrowserActionBadge extends ImmutableComponent {
  render () {
    return <div
      className='browserActionBadge'
      style={{backgroundColor: this.props.color}}
      >{this.props.text}</div>
  }
}

module.exports = BrowserActionBadge
