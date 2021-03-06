import React, {Component} from 'react';
import {Container, Grid, Card, Icon} from 'semantic-ui-react';

import items from './items.json';

class Items extends Component {

  render() {
    return(
      <Container>
        <Grid columns='three'>
          {/* <Grid.Column>
            <Card
              image="https://www.hirerentalcars.com/wp-content/uploads/2016/02/02-croatia-rentacar.jpg"
              header="Croatie"
              description="La Croatie, en forme longue la république de Croatie, en croate Hrvatska et Republika Hrvatska, est un pays d'Europe du Sud-Est qui s'étend de l'extrémité orientale des Alpes..."
              extra={
                (
                  <a><Icon name="heart" />3 Likes</a>
                )
              }
              centered
            />
          </Grid.Column> */}
          {
            items.trips.map(
              (trip, i) =>
                <Grid.Column key={i}>
                  <Card
                    image={trip.url}
                    header={trip.place}
                    description={trip.description}
                    extra={(
                        <a><Icon name="heart" />{trip.likes} Likes</a>
                      )}
                  />
                </Grid.Column>
            )
          }


        </Grid>
      </Container>
    )
  }
}

export default Items;
