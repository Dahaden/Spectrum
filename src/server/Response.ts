

interface Spectrum {
  values: SpectrumItems; 
}

interface SpectrumItems {
  [value: string]: SpectrumItem;
}

interface SpectrumItem {
  greaterThan: string[];
  lessThan: string[];
  onSpectrum: boolean;
  equalTo: string[];
}

const dummyData: Spectrum = {
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
    }
  }
};

export default dummyData;