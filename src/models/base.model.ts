import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Base extends Entity {
  @property({
    type: 'date',

    name: 'created_at',
  })
  createdAt: Date;

  @property({
    type: 'date',

    name: 'modified_at',
  })
  modifiedAt: Date;
  constructor(data?: Partial<Base>) {
    super(data);
  }
}

export type BaseWithRelations = Base;
