import {DefaultCrudRepository} from '@loopback/repository';
import {Customer} from '../models';
import {CrudappDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id
> {
  constructor(
    @inject('datasources.crudapp') dataSource: CrudappDataSource,
  ) {
    super(Customer, dataSource);
  }
}
