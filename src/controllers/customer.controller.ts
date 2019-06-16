import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Customer, Users} from '../models';
import {CustomerRepository} from '../repositories';
import {UsersRepository} from '../repositories';
export class CustomerController {
  constructor(
    @repository(CustomerRepository)
    public customerRepository: CustomerRepository,
    @repository(UsersRepository)
    public user: UsersRepository,
  ) {}

  @post('/customers', {
    responses: {
      '200': {
        description: 'Customer model instance',
        content: {'application/json': {schema: {'x-ts-type': Customer}}},
      },
    },
  })
  async create(@requestBody() customer: Customer): Promise<Customer> {
    return await this.customerRepository.create(customer);
  }
  @get('/customers/count', {
    responses: {
      '200': {
        description: 'Customer model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer))
    where?: Where<Customer>,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }
  @get('/customers', {
    responses: {
      '200': {
        description: 'Array of Customer model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer))
    filter?: Filter<Customer>,
  ): Promise<Customer[]> {
    // let obj: Array<Object>;
    // let customers = await this.customerRepository.find(filter);

    // let newuser = customers.map(async (customer, index) => {
    // let userrr = await this.user.find({where: {customer: customer.id}});
    // console.log(userrr);
    // obj[customer.id] = jj;
    // return {...customer, user: userrr};
    //  });

    //console.log('blah');
    //setTimeout(() => newuser, 1000);

    // let userrr = await this.user.find();

    return await this.customerRepository.find(filter);
  }
  @get('/customers/{id}/order')
  async createOrder(
    @param.path.number('id') customerId: typeof Customer.prototype.id,
    // @requestBody() users: Users,
  ): Promise<Users[]> {
    return await this.customerRepository.users(customerId).find();
  }
  @patch('/customers', {
    responses: {
      '200': {
        description: 'Customer PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() customer: Customer,
    @param.query.object('where', getWhereSchemaFor(Customer))
    where?: Where<Customer>,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers/{id}', {
    responses: {
      '200': {
        description: 'Customer model instance',
        content: {
          'application/json': {schema: {'x-ts-type': {Customer, Users}}},
        },
      },
    },
  })
  async findById(@param.path.number('id') id: number) {
    let customer = await this.customerRepository.findById(id);
    // let user = await this.user.find({where: {customer: customer.id}});
    return {customer};
  }

  @patch('/customers/{id}', {
    responses: {
      '204': {
        description: 'Customer PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer,
  ): Promise<void> {
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers/{id}', {
    responses: {
      '204': {
        description: 'Customer PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer,
  ): Promise<void> {
    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers/{id}', {
    responses: {
      '204': {
        description: 'Customer DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerRepository.deleteById(id);
  }
}
