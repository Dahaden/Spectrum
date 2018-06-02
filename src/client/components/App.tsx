import * as React from 'react';
import styled from '../theme';

const Background = styled.div`
  background: #ECCEAC;
  color: #005CC5;
  text-align: center;
  height: inherit;
  width: inherit;
`;

export default class App extends React.Component<{}, {}> {
  render() {
    return <Background>
      <h1>Sample React App</h1>
      <h2>Hello World</h2>
      <p>Test</p>
    </Background>;
  }
}