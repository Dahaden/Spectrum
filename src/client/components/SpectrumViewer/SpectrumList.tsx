import * as React from 'react';
import styled from '../../theme';

interface Props {
  inSpectrum: Item[];
  notInSpectrum: Item[];
}

export interface Item {
  name: string;
  onClick?: () => void;
}

const FlexContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
`;

const FlexItems = styled.div`
  padding: 0px 20px 0px 20px;
`;

class SpectrumList extends React.Component<Props, {}> {

  // defaultPreventer = (cb: () => void): () => void => 
  //   (e)

  renderItem = (item: Item) => item.onClick ?
    (<button key={item.name} onClick={item.onClick}>{item.name}</button>) :
    item.name;

  render() {
    return <FlexContainer>
      <FlexItems>
        <h1>Spectrum includes</h1>
        {this.props.inSpectrum.map(this.renderItem)}
      </FlexItems>
      <FlexItems>
      <h1>Spectrum excludes</h1>
        {this.props.notInSpectrum.map(this.renderItem)}
      </FlexItems>
    </FlexContainer>;
  }
}

export default SpectrumList;