import {model, property, belongsTo, hasMany} from '@loopback/repository';
import {Base} from './base.model';
import {Customer} from './customer.model';
@model({settings: {}})
export class Users extends Base {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    name: 'first_name',
  })
  firstName: string;
  @property({
    type: 'string',
    required: true,
    default: 2,
  })
  customer?: string;

  // @hasMany(() => Customer)
  // customer?: number;

  @property({
    type: 'string',
    name: 'middle_name',
  })
  middleName?: string;

  @property({
    type: 'string',
    name: 'last_name',
  })
  lastName?: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'number',
    name: 'phone_no',
  })
  phoneNo?: number;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'number',
    required: true,
  })
  roles: number;
  constructor(data?: Partial<Users>) {
    super(data);
  }
}
// export interface UserRealation {
//   customer?: CustomerWithRelations;
// }

export type OrderWithRelations = Users;
