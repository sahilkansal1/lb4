import {DefaultCrudRepository} from '@loopback/repository';
import {Users} from '../models';
import {CrudappDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.id
> {
  constructor(
    @inject('datasources.crudapp') dataSource: CrudappDataSource,
  ) {
    super(Users, dataSource);
  }
}
