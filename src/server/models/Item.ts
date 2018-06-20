import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table
export default class Item extends Model<Item> {
 
  @Column({
    type: DataType.TEXT,
    unique: true
  })
  name: string;
}