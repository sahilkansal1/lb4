import {
  DefaultCrudRepository,
  HasManyRepositoryFactory,
  juggler,
  repository,
} from '@loopback/repository';
import {Customer, Users} from '../models';

import {inject, Getter} from '@loopback/core';
import {UsersRepository} from './users.repository';
export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id
> {
  public readonly users: HasManyRepositoryFactory<
    Users,
    typeof Customer.prototype.id
  >;
  constructor(
    @inject('datasources.crudapp') protected db: juggler.DataSource,
    @repository.getter('UsersRepository')
    getUserRepository: Getter<UsersRepository>,
  ) {
    super(Customer, db);
    this.users = this.createHasManyRepositoryFactoryFor(
      'users',
      getUserRepository,
    );
  }
}
