import { Card, Icon, Image, Dimmer, Loader, Button } from "semantic-ui-react";
import "./ListComics.scss"

export default function ListComics({ listComics, renderComics, setrenderComics }) {
  //cuando ponemos los {} de una vez en los parametros, estamos haciendo un destructuring directo
  //hago esto porque solo estoy recibiendo una cosa por los props y no es necesario usar el destructuring tradicional
  const { loading, result } = listComics;
  //hago un destructuring para obtener lo que verdaderamente me importa del resultado
  if (loading || !result)
    return (
      <Dimmer active inverted>
        <Loader inverted>Loading...</Loader>
      </Dimmer>
    );

  const { results } = result.data;
  //aca digo que results sera lo que yo traigo desde result.data

  const loadMoreComics = () =>{
    const numberComics = renderComics;
    setrenderComics(numberComics+5)
  }

  return (
    <Card.Group itemsPerRow={5}>
      {results.map((res, index) => (
        <Card key={index} className="list-comics">
          <Image
            src={`${res.images[0].path}.${res.images[0].extension}`}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{res.title}</Card.Header>
            <Card.Meta>
              <span>Digital ID:{res.id}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            <Button
              animated
              fluid
              as="a"
              href={res.urls[0].url}
              target="_blank"
              color="black"
            >
              <Button.Content visible>Mas Informacion</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right"/>
              </Button.Content>
            </Button>
          </Card.Content>
        </Card>
      ))}
        <div className="container-button">
            <Button color="red" onClick={ () => loadMoreComics()}>
                <Icon name="plus"/>
                Cargar mas comics
            </Button>
        </div>
    </Card.Group>
  );
}
