import SpectrumType from '../common/SpectrumTypes';
import { Sequelize, ISequelizeConfig } from 'sequelize-typescript';

import { Spectrum, Item, ItemCharacteristic } from './models';

const database: string = process.env.PGDATABASE || '';
const username: string = process.env.PGUSER || '';
const password: string = process.env.PGPASSWORD || '';

const config: ISequelizeConfig = {
  database,
  dialect: 'postgres',
  username,
  password,
  // modelPaths: [__dirname + '/models'],
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT || '0'),
  operatorsAliases: false,
  validateOnly: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

const sequelize = new Sequelize(config);

sequelize.addModels([ Spectrum, Item, ItemCharacteristic]);

export const checkDatabaseConnection = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  sequelize.sync();
}

export const createSpectrum = (name: string, answer: string): Spectrum => {
  const spectrum = Spectrum.build({ name, answer });
  spectrum.save();
  console.log("Spectrum:", JSON.stringify(spectrum, null, 2));
  return spectrum;
} 