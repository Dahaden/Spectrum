import { Table, Column, ForeignKey, Model } from 'sequelize-typescript';
import SpectrumTable from './Spectrum';
import ItemTable from './Item';

export enum ItemCharacteristicType {
  PENDING = 0,
  GREATER_THAN = 1,
  LESS_THAN = 2,
  EQUAL_TO = 3,
  NOT_ON_SPECTRUM = 4
}

@Table
export default class ItemCharacteristic extends Model<ItemCharacteristic> {
 
  @ForeignKey(() => SpectrumTable)
  @Column
  spectrumId: number;

  @ForeignKey(() => ItemTable)
  @Column
  itemId: number;

  @Column
  charateristicType: ItemCharacteristicType;

  @ForeignKey(() => ItemTable)
  @Column
  otherItemId?: number;
}