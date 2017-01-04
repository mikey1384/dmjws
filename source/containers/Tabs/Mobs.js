import React, {Component} from 'react';
import PageHeading from 'components/PageHeading';
import Container from 'components/Container';
import Section from 'components/Section';
import Card from 'components/Card';
import {connect} from 'react-redux';


@connect(
  state => ({
    sections: state.MobsReducer.sections
  })
)
export default class Mobs extends Component {
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
    return thumbs.reduce((decks, thumb, index, thumbs) => {
      if (index % 3 < 2 && index !== thumbs.length - 1) {
        deckArray.push(thumb);
        return decks;
      }
      deckArray.push(thumb);
      let deck = deckArray;
      deckArray = [];
      return decks.concat([
        <div className="card-deck text-xs-center" key={decks.length}>
          {deck.map((thumb, index) => <Card key={index} {...thumb} />)}
        </div>
      ])
    }, [])
  }
}
