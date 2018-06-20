import * as React from 'react';
import styled from '../../theme';
import { SpectrumItem as SpectrumItemType } from '../../../common/SpectrumTypes';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: inherit;
  width: inherit;
`;

const ItemSeperator = styled.div`

`;

const ItemSection = styled.div`

`;

const ItemList = styled.div`

`;

interface Props {
  name: string;
  itemInfo: SpectrumItemType;
  onClick: (name: string) => void;
}

class SpectrumItem extends React.Component<Props, {}> {

  itemOnClick = (name: string) => () => {
    this.props.onClick(name)
  } 

  renderSubItem = (name: string) => (
    <button key={name} onClick={this.itemOnClick(name)}>{name}</button>
  )

  render() {
    return <ItemContainer>
      <h1>{this.props.name}</h1>
      <ItemSection>
        <h1>Less than:</h1>
        <ItemList>
          {this.props.itemInfo.lessThan.map(this.renderSubItem)}
        </ItemList>
      </ItemSection>
      <ItemSeperator/>
      <ItemSection>
        <h1>Equal to:</h1>
        <ItemList>
          {this.props.itemInfo.equalTo.map(this.renderSubItem)}
        </ItemList>
      </ItemSection>
      <ItemSeperator/>
      <ItemSection>
        <h1>Greater than:</h1>
        <ItemList>
          {this.props.itemInfo.greaterThan.map(this.renderSubItem)}
        </ItemList>
      </ItemSection>
    </ItemContainer>
  }
}

export default SpectrumItem;