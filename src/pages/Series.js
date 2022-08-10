import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListSeries from "../components/ListSeries";
import useFetch from "../hooks/useFetch";

export default function Series() {
  const listSeries = useFetch(
    `https://gateway.marvel.com/v1/public/series?ts=1&apikey=237db5ece074cf2b73db8deba3218103&hash=e5c48f9bc3d0c5dd181f918f0a2a4b0d`
  );
  return (
    <div>
      <div className="series-page">
        <div id="slide-series-image" />
        <Grid>
          <Grid.Column>
            <Container bg="light">
              <Header as="h2">Las últimas series de Marvel</Header>
              <ListSeries listSeries={listSeries} />
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}
