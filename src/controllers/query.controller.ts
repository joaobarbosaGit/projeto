import {Filter, FilterExcludingWhere, repository} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Query} from '../models';
import {QueryRepository} from '../repositories';

export class QueryController {
  constructor(
    @repository(QueryRepository)
    public queryRepository: QueryRepository,
  ) {}

  @post('/query')
  @response(200, {
    description: 'Query model instance',
    content: {'application/json': {schema: getModelSchemaRef(Query)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
              },
            },
          },
        },
      },
    })
    query: Query,
  ): Promise<Query> {
    const data = await this.queryRepository.consumirAPIExternar(query.title);
    this.queryRepository.create(query);
    return data;
  }

  @get('/history')
  @response(200, {
    description: 'Array of Query model instances',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {},
        },
      },
    },
  })
  async find(@param.filter(Query) filter?: Filter<Query>): Promise<Query[]> {
    return this.queryRepository.find(filter);
  }

  @get('/query/{id}')
  @response(200, {
    description: 'Query model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Query, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Query, {exclude: 'where'})
    filter?: FilterExcludingWhere<Query>,
  ): Promise<Query> {
    return this.queryRepository.findById(id, filter);
  }

  @put('/query/{id}')
  @response(204, {
    description: 'Query PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() query: Query,
  ): Promise<void> {
    await this.queryRepository.replaceById(id, query);
  }

  @del('/query/{id}')
  @response(204, {
    description: 'Query DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.queryRepository.deleteById(id);
  }
}
