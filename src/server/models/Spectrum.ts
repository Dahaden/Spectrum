import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table
export default class Spectrum extends Model<Spectrum> {
 
  @Column({
    type: DataType.TEXT,
    unique: true
  })
  name: string;
}