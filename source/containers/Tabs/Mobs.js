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
          title="DMJW's VIDEOS!!"
          titleColor="#ff009a"
          description="DMJW's videos Right here! Subscreibe!"
        />
        <h2>Recently Popular</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/K9cofR9VI6M?rel=0" frameborder="0" allowfullscreen></iframe>
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
