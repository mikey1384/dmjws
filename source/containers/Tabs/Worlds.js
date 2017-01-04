import React, {Component} from 'react';
import PageHeading from 'components/PageHeading';
import Section from 'components/Section';
import Container from 'components/Container';
import {connect} from 'react-redux';


@connect(
  state => ({
    worlds: state.WorldsReducer.worlds
  })
)
export default class Worlds extends Component {
  render() {
    const {worlds} = this.props;
    return (
      <div>
        <PageHeading
          title="Minecraft Worlds!!"
          description="Three unique worlds of Minecraft"
        />
        <Container>
          {worlds.map((world, index) => (
            <Section
              key={index}
              style={{textAlign: 'left', marginTop: index > 0 ? '3em' : '2.5em'}}
              {...world}
            >
              <div style={{textAlign: 'center'}}>
                <img style={{width: '100%'}} alt={`${world.title}`} src={`${world.imageSrc}`} />
              </div>
            </Section>
          ))}
        </Container>
      </div>
    )
  }
}
