import React, {useState, useEffect, useContext } from 'react';
import {Form, Grid, Container, Header, Card,} from 'semantic-ui-react';
import styled from "styled-components"
import axios from "axios";

const Skills = () => {
  const [skills, setSkills] = useState([])

  useEffect( () => {
    axios.get(`api/skills`)
    .then(res=>{setSkills(res.data)})
  }, [])


  return(
  
      <>
    <Header>
      PlaceHolder
      {skills.map( s => (

        <Card.Header>
          {s.name}
        </Card.Header>
        ))}
    </Header>
    
    </>
  )
}

const CategoryContainer = styled.div`
  padding: 4.167em 1.25em 4.167em 1.25em;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
  margin-bottom: 1.25em;
  margin-top: .625em;
  border-radius: 4px;
  background: white;
`;

const Spacing = styled.div`
  padding: 5px 2.5em 2.5em 2.5em !important;
`;

const RowCentered = styled.div`
  padding: .625em !important;
`;

const RowSpacing = styled.div`
  padding: .625em !important;
`;

export default Skills;