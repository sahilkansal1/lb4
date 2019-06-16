import {model, property} from '@loopback/repository';
import {Base} from './base.model';
@model({settings: {}})
export class Basemodel extends Base {
  @property({
    type: 'number',

    name: 'modified_by',
  })
  modifiedBy?: number;

  @property({
    type: 'number',
    name: 'created_by',
  })
  createdBy?: number;

  constructor(data?: Partial<Basemodel>) {
    super(data);
  }
}

export interface BasemodelRelations {
  // describe navigational properties here
}

export type BasemodelWithRelations = Basemodel & BasemodelRelations;
