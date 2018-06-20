import { Table, Column, DataType, Model, PrimaryKey } from 'sequelize-typescript';

@Table
export default class Spectrum extends Model<Spectrum> {
 
  @PrimaryKey
  @Column({
    type: DataType.TEXT,
    unique: true
  })
  name: string;

  @Column(DataType.TEXT)
  answer: string;
}