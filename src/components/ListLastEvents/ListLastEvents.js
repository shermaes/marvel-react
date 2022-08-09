import { Card, Header as SemanticHeader } from "semantic-ui-react";
import Container from "../Container";
import "./ListLastEvents.scss";
import useFetch from '../../hooks/useFetch'
import LastEvents from "../LastEvents/LastEvents";

export default function ListLastEvents() {

const lastEventsFetch = useFetch(`https://gateway.marvel.com/v1/public/events?ts=1&apikey=237db5ece074cf2b73db8deba3218103&hash=e5c48f9bc3d0c5dd181f918f0a2a4b0d&orderBy=startDate&limit=5`)
console.log(lastEventsFetch);

  return (
    <div className="container-list-last-events">
      <SemanticHeader size="large">Ultimos eventos</SemanticHeader>
        <Container bg="light">
            <Card.Group itemsPerRow={5}>
              <LastEvents lastEventsFetch={lastEventsFetch}/>
            </Card.Group>
        </Container>
    </div>
  );
}
