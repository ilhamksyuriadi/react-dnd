import React from 'react';
import Card from './component/Card';
import styled from 'styled-components';
import {InitialData} from './data/initialData';

const Title = styled.h1`
  color: #7B7B7B;
  font-family: sans-serif;
  font-size: 30px;
  text-align: center;
  padding-top: 25px;
`

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 25px;
`


const App = () => {
  const [state, setState] = React.useState(InitialData);

  return (
    <React.Fragment>
      <Title>Drag & Drop React JS</Title>
      <CardContainer>
        {
          state.cardOrder.map((cardId, index) => {
            const card = state.cards[cardId];
            const tasks = card.taskIds.map(taskId => state.tasks[taskId]);
            return <Card key={cardId} card={card} tasks={tasks} index={index} />
          })
        }
      </CardContainer>
    </React.Fragment>
  )
  
}

export default App;
