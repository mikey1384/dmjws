import React, {Component} from 'react';
import PageHeading from 'components/PageHeading';
import Container from 'components/Container';
import Table from 'components/Table';
import {connect} from 'react-redux';


class Commands extends Component {
  render() {
    const {commands} = this.props;
    return (
      <div>
        <PageHeading
          title="Minecraft Commands"
        />
        <Container style={{marginTop: '2rem'}}>
          <Table {...commands} />
        </Container>
      </div>
    )
  }
}

export default connect(
  state => ({
    commands: state.commands.table
  })
)(Commands)
