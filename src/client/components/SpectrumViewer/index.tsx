import * as React from 'react';
import styled from '../../theme';
import SpectrumType from '../../../common/SpectrumTypes';
import SpectrumList, { Item } from './SpectrumList';
import SpectrumItem from './SpectrumItem';

interface Props {
  spectrum: SpectrumType;
}

interface PartialState {
  inSpectrum: string[];
  notInSpectrum: string[];
}

interface State extends PartialState {
  selectedItem?: string;
}

class SpectrumViewer extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      inSpectrum: [],
      notInSpectrum: [],
    };
  }

  componentDidMount() {
    const itemKeys = Object.keys(this.props.spectrum.values);
    const sortingObj: PartialState = {
      inSpectrum: [],
      notInSpectrum: [],
    };
    const reducedSort = itemKeys.reduce((sorted: PartialState, itemKey) => {
      if (this.props.spectrum.values[itemKey].onSpectrum) {
        sorted.inSpectrum.push(itemKey);
      } else {
        sorted.notInSpectrum.push(itemKey);
      }
      return sorted;
    }, sortingObj);
    this.setState(reducedSort);
  }

  updateSelectedItem = (selectedItem: string) => this.setState({ selectedItem });

  itemOnClick = (selectedItem: string) => () => this.setState({ selectedItem });

  strToItem = (canClick: boolean) => (name: string): Item =>
    ({
      name,
      onClick: canClick ? this.itemOnClick(name) : undefined,
    });

  render() {
    if (this.state.selectedItem) {
      return <SpectrumItem
        itemInfo={this.props.spectrum.values[this.state.selectedItem]}
        name={this.state.selectedItem}
        onClick={this.updateSelectedItem}
      />;
    } else {
      return <SpectrumList
        inSpectrum={this.state.inSpectrum.map(this.strToItem(true))}
        notInSpectrum={this.state.notInSpectrum.map(this.strToItem(false))}
      />
    }
  }
}

export default SpectrumViewer;