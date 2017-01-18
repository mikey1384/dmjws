import React, {Component} from 'react';
import PageHeading from 'components/PageHeading';
import Container from 'components/Container';
import Section from 'components/Section';
import Card from 'components/Card';
import {connect} from 'react-redux';
import {CardDeck} from 'reactstrap';


class Mobs extends Component {
  render() {
    const {sections} = this.props;
    return (
      <div>
        <PageHeading
          title="Minecraft Mobs!!"
          description="Dangerous Monsters In Minecraft"
        />
        <Container>
          {sections.map((section, index) => (
            <Section
              title={section.title}
              titleColor={section.titleColor}
              style={{marginTop: index === 0 ? '2em' : '3em'}}
              key={index}
            >
              <div className="card-deck-wrapper" style={{marginTop: '2em'}}>
                {this.renderDeck(section.thumbs)}
              </div>
            </Section>
          ))}
        </Container>
      </div>
    )
  }

  renderDeck(thumbs) {
    let deckArray = [];
    let rowNumber = 0;
    return thumbs.reduce((decks, thumb, index, thumbs) => {
      if (index % 3 < 2 && index !== thumbs.length - 1) {
        deckArray.push(thumb);
        return decks;
      }
      deckArray.push(thumb);
      let deck = deckArray;
      rowNumber++;
      deckArray = [];
      return decks.concat([
        <CardDeck key={decks.length} style={{marginTop: rowNumber > 1 && '1em'}}>
          {deck.map((thumb, index) => <Card key={index} {...thumb} />)}
        </CardDeck>
      ])
    }, [])
  }
}

export default connect(
  state => ({
    sections: state.mobs.sections
  })
)(Mobs)
