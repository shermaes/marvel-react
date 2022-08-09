import {Header as SemanticHeader, Button, Grid, Image} from 'semantic-ui-react';
import Container from '../Container';
import marvelImage from '../../img/marvel.png'
import './BestCharacters.scss'

export default function BestCharacters() {
    return(
        
        <Container>
        <div className='best-characters'>
        <Grid columns={2} divided="vertically">
        <Grid.Column>
        <SemanticHeader as="h1">Los mejores personajes de Marvel</SemanticHeader>
        <SemanticHeader as="h3">Disfruta del mejor contenido</SemanticHeader>
        <Button>Ver todos los personajes</Button>
        </Grid.Column>
        <Grid.Column className='image-container'>
        <Image src={marvelImage} alt="Marvel app"/>
        </Grid.Column>
        </Grid>
        </div>
        </Container>
    )
};
