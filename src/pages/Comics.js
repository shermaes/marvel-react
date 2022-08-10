import { useState } from "react";
import {Grid, Header as SemanticHeader } from 'semantic-ui-react';
import Container from "../components/Container";
import ListComics from "../components/ListComics";
import useFetch from "../hooks/useFetch";



export default function Comics() {
    const [renderComics, setrenderComics] = useState(10)
    const listComics = useFetch(`https://gateway.marvel.com/v1/public/comics?ts=1&apikey=237db5ece074cf2b73db8deba3218103&hash=e5c48f9bc3d0c5dd181f918f0a2a4b0d&orderBy=focDate&limit=${renderComics}`)
    console.log(listComics);
    
    return(
        <div className="comics-page">
            <div id="slide-comics-image"/>
            <Grid>
                <Grid.Column>
                    <Container bg="light">
                        <SemanticHeader as="h2">Los mejores Comics</SemanticHeader>
                        <ListComics listComics={listComics} renderComics={renderComics} setrenderComics={setrenderComics} />
                    </Container>
                </Grid.Column>
            </Grid>
        </div>
    )
};
