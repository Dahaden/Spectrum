
export default interface Spectrum {
  values: SpectrumItems; 
}

export interface SpectrumItems {
  [value: string]: SpectrumItem;
}

export interface SpectrumItem {
  greaterThan: string[];
  lessThan: string[];
  onSpectrum: boolean;
  equalTo: string[];
}