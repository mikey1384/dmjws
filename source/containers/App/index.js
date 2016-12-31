import React, {Component} from 'react';
import Cover from 'components/Cover';
import TopNav from 'containers/App/TopNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cover
          text="Welcome to my Minecraft Website!"
          textColor={`#${Math.floor(Math.random()*16777215).toString(16)}`}
        />
        <TopNav />
        {this.props.children}
      </div>
    );
  }
}

export default App;
