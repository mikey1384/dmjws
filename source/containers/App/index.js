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
          text="DMJW's"
          textColor="#FF00CE"
        ></Cover>
        <TopNav location={!!location ? (!location.pathname.split('/')[1] ? '' : location.pathname.split('/')[1]) : ''} />
        {children}
      </div>
    );
  }
}
