import React, {Component} from 'react';
import PageHeading from 'components/PageHeading';
import Container from 'components/Container';
import Table from 'components/Table';
import {connect} from 'react-redux';

class References extends Component {
  render() {
    const {table} = this.props;
    return (
      <div>
        <PageHeading title="References" />
        <Container style={{marginTop: '2rem'}}>
          <Table {...table} />
        </Container>
      </div>
    )
  }
}

export default connect(
  state => ({
    table: state.references.table
  })
)(References)
