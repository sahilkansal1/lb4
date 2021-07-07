import {DefaultCrudRepository} from '@loopback/repository';
import {Roles} from '../models';
import {CrudappDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RolesRepository extends DefaultCrudRepository<
  Roles,
  typeof Roles.prototype.id
> {
  constructor(
    @inject('datasources.crudapp') dataSource: CrudappDataSource,
  ) {
    super(Roles, dataSource);
  }
}
