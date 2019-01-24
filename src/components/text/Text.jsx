import React, { Component } from 'react'

import '../../assets/sass/components/text/text.scss'

export class Text extends Component {
  render() {
    return (
      <section>
        <article className="bio">
          Energy drink sommelier, risk-taker, designer, front-end developer and scrum master. <br/>
          Operating at the junction of programming, design and agile to craft experiences both online and in real life.
          <br/>
          Nothing ventured, nothing gained.
        </article>
      </section>
    )
  }
}

export default Text
