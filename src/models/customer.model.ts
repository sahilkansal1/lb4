import {model, property} from '@loopback/repository';
import {Basemodel} from './basemodel.model';
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
    name:'name'
  })
  customerName: string;

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
