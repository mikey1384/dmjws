import React, {Component} from 'react';
import PageHeading from 'components/PageHeading';
import Section from 'components/Section';
import Container from 'components/Container';

export default class Worlds extends Component {
  render() {
    const {images} = this.props;
    return (
      <div>
        <PageHeading
          title="Minecraft Worlds!!"
          description="Three unique worlds of Minecraft"
        />
        <Container>
          {images.map((image, index) => (
            <Section
              key={index}
              style={{textAlign: 'left', marginTop: index > 0 ? '3em' : '2.5em'}}
              {...image}
            >
              <div style={{textAlign: 'center'}}>
                <img style={{width: '100%'}} alt={`${image.title}`} src={`${image.src}`} />
              </div>
            </Section>
          ))}
        </Container>
      </div>
    )
  }
}
