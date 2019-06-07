import {model, property} from '@loopback/repository';
import {Base} from './base.model';
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
  })
  first_name: string;

  @property({
    type: 'number',
    required: true,
    default: 1,
  })
  customer: number;

  @property({
    type: 'string',
  })
  middle_name?: string;

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
  })
  phone_no?: number;

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
