import React, {Component} from 'react';
import Cover from 'components/Cover';
import TopNav from 'containers/App/TopNav';
import 'bootstrap/dist/css/bootstrap.css';


export default class App extends Component {
  render() {
    const {location, children} = this.props;
    return (
      <div className="App">
        <Cover
          text="Welcome to my Minecraft Website!"
          textColor={`#${this.getCoverColor()}`}
        />
        <TopNav location={!!location ? (!location.pathname.split('/')[1] ? '' : location.pathname.split('/')[1]) : ''} />
        {children}
      </div>
    );
  }

  getCoverColor() {
    return (
      function factory(string, c) {
        return string[Math.floor(Math.random() * string.length)] + (c && factory(string, c - 1));
      }
    )('789ABCDEF', 4);
  }
}
