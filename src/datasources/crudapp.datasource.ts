import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './crudapp.datasource.json';

export class CrudappDataSource extends juggler.DataSource {
  static dataSourceName = 'crudapp';

  constructor(
    @inject('datasources.config.crudapp', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
