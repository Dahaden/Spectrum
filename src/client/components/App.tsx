import * as React from 'react';
import { RiseLoader } from 'react-spinners';
import styled from '../theme';
import SpectrumType from '../../common/SpectrumTypes';
import SpectrumViewer from './SpectrumViewer';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  width: inherit;
`;

interface State {
  spectrumData?: SpectrumType;
}

export default class App extends React.Component<{}, State> {

  constructor(props) {
    super(props);
    this.state = {
      spectrumData: undefined,
    };
  }

  componentDidMount() {
    fetch('/spectrums/test')
      .then(res => res.json())
      .then((res: SpectrumType) =>
        this.setState({
          spectrumData: res
        })
      );
  }

  render() {
    return <Background>
      {this.state.spectrumData ?
        <SpectrumViewer
          spectrum={this.state.spectrumData}
        /> :
        <RiseLoader/>
      }
    </Background>;
  }
}