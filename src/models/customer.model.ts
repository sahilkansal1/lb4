import {model, property, hasMany, Order} from '@loopback/repository';
import {Basemodel} from './basemodel.model';
import {Users} from './users.model';
// import {Users} from './users.model';
@model({settings: {}})
export class Customer extends Basemodel {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    name: 'customer_name',
  })
  customerName: string;

  @hasMany(() => Users, {
    keyTo: 'customer',
  })
  users?: Users[];

  @property({
    type: 'string',
  })
  website?: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}
