import React, {Component} from 'react';
import Cover from 'components/Cover';
import TopNav from 'containers/App/TopNav';

class App extends Component {
  render() {
    const {location, children} = this.props;
    return (
      <div className="App">
        <Cover
          text="Welcome to my Minecraft Website!"
          textColor={`#${Math.floor(Math.random()*16777215).toString(16)}`}
        />
        <TopNav location={!location.pathname.split('/')[1] ? '' : location.pathname.split('/')[1]} />
        {children}
      </div>
    );
  }
}

export default App;
