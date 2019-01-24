import React, { Component } from 'react'

import '../../assets/sass/components/icons/icons.scss'

export class Icons extends Component {
  render() {
    return (
      <div>
        <section class="links centered">
        <ul>
          <li>
            <a className="icon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/giotto-thays/">linkedin</a>
          </li>
          <li>
            <a className="icon" target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gthays">behance</a>
          </li>
          <li>
            <a className="icon" target="_blank" rel="noopener noreferrer" href="https://github.com/thaysthays">github</a>
          </li>
        </ul>


        </section>
      </div>
    )
  }
}

export default Icons
