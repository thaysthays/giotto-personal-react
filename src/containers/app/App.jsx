import React, { Component } from 'react';
import Image from '../../components/image/Image'
import Text from '../../components/text/Text'
import Icons from '../../components/icons/Icons'

class App extends Component {
  render() {
    return (
      <div>
        <Image />
        <Text />
        <Icons />
      </div>
    );
  }
}

export default App;
