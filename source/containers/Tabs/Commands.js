import React, {Component} from 'react';
import PageHeading from 'components/PageHeading';
import Container from 'components/Container';
import Table from 'components/Table';


export default class Commands extends Component {
  render() {
    const {table} = this.props;
    return (
      <div>
        <PageHeading
          title="Minecraft Commands"
        />
        <Container style={{marginTop: '2rem'}}>
          <Table {...table} />
        </Container>
      </div>
    )
  }
}
