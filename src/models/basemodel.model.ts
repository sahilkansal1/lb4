import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Basemodel extends Entity {
  @property({
    type: 'number',
    required: true,
    name: 'modified_by',
  })
  modifiedBy: number;

  @property({
    type: 'number',
    required: true,
    name: 'created_by',
  })
  createdBy: number;
  @property({
    type: 'date',

    name: 'created_at',
  })
  createdAt: string;

  @property({
    type: 'date',

    name: 'modified_at',
  })
  modifiedAt: Date;

  constructor(data?: Partial<Basemodel>) {
    super(data);
  }
}

export interface BasemodelRelations {
  // describe navigational properties here
}

export type BasemodelWithRelations = Basemodel & BasemodelRelations;
