import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import axios from 'axios';
import {MysqlDataSource} from '../datasources';
import {Query, QueryRelations} from '../models';

export class QueryRepository extends DefaultCrudRepository<
  Query,
  typeof Query.prototype.id,
  QueryRelations
> {
  constructor(@inject('datasources.mysql') dataSource: MysqlDataSource) {
    super(Query, dataSource);
  }

  async consumirAPIExternar(title: string): Promise<Query> {
    const {data} = await axios.get(
      `https://www.omdbapi.com/?apikey=1afd46af&t=${title}&plot=full`,
    );
    return data;
  }
}
