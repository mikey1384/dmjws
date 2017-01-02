import React, {Component} from 'react';
import PageHeader from 'components/PageHeader';
import Container from 'components/Container';
import Section from 'components/Section';

export default class Mobs extends Component {
  render() {
    return (
      <div>
        <PageHeader
          title="Minecraft Mobs!!"
          description="Dangerous Monsters In Minecraft"
        />
        <Container>
          <Section
            title="Overworld monsters"
            titleColor="green"
          >

          </Section>
          <Section
            title="Nether monsters"
            titleColor="red"
          >

          </Section>
        </Container>
      </div>
    )
  }
}
