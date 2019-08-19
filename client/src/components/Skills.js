import React, {useState, useEffect, } from 'react';
import {Form, Grid, Container, Button, Header, Card,} from 'semantic-ui-react';
import { Link, } from "react-router-dom";
import styled from "styled-components"
import axios from "axios";

const Skills = () => {
  const [skills, setSkills] = useState(["Hello", "Goodbye", "WHYTHEFUKUNOTWORK?"])

  useEffect( () => {
    axios.get(`api/skills/`)
    .then(res => {setSkills(res.data);
    })
  }, [] )

  const renderSkills = () => {
    // if (Skills.length <= 0)
    //   return <Header as="h2">No Skills</Header>
    return skills.map( s => (
      <Card>
          <Card.Content>
          <Card.Header>{s.name}</Card.Header>
          <Card.Description>
            {s.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Button as={Link} to={`/skills/${s.id}`} color='blue'>
            View
          </Button>
        </Card.Content>
      </Card>
    ))
  }


  return(

    <div>
      <Header as="h1">Skills</Header>
      <br />
      <Card>
        { renderSkills() }
      </Card>
    </div>
    
  )
}

export default Skills;