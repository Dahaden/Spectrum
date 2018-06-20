import SpectrumType from '../common/SpectrumTypes';

const dummyData: SpectrumType = {
  values: {
    air: {
      onSpectrum: true,
      greaterThan: [
        'fire'
      ],
      lessThan: [
        'tank'
      ],
      equalTo: [
        'popcorn'
      ]
    },
    fire: {
      onSpectrum: true,
      greaterThan: [],
      lessThan: [
        'air'
      ],
      equalTo: []
    },
    popcorn: {
      onSpectrum: true,
      greaterThan: [],
      lessThan: [],
      equalTo: [ 'air' ]
    },
    tank: {
      onSpectrum: true,
      greaterThan: [ 'air' ],
      lessThan: [],
      equalTo: []
    },
    cup: {
      onSpectrum: false,
      greaterThan: [],
      lessThan: [],
      equalTo: []
    }
  }
};

export default dummyData;