import {model, property} from '@loopback/repository';
import {Basemodel} from './basemodel.model';
@model({settings: {}})
export class Roles extends Basemodel {
  @property({
    type: 'number',
    required: true,
    default: 2,
  })
  keys: number;

  @property({
    type: 'string',
    required: true,
  })
  role: string;

  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  constructor(data?: Partial<Roles>) {
    super(data);
  }
}
