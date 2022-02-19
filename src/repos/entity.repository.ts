import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';
import { IPaging } from 'src/helpers/paging/query.paging';
import { IEntityRepository } from './entity.IRepository';

export abstract class EntityRepository<T extends Document>
  implements IEntityRepository<T>
{
  constructor(protected readonly entityModel: Model<T>) {}

  async findOne(entityFilterQuery: FilterQuery<T>): Promise<T | null> {
    return await this.entityModel
      .findOne(entityFilterQuery, {
        _id: 0,
      })
      .lean();
    //.exec();
  }

  async findById(id: string): Promise<T | null> {
    return await this.entityModel.findOne({ id: id }).lean();
  }

  async find(entityFilterQuery: FilterQuery<T>): Promise<T[] | null> {
    return this.entityModel.find(entityFilterQuery).lean();
  }

  async query(
    paging: IPaging,
    entityFilterQuery: FilterQuery<T>,
  ): Promise<T[] | null> {
    return this.entityModel.find(entityFilterQuery).limit(paging.pageNo).lean();
  }

  async create(entityData: unknown): Promise<T> {
    const entity = new this.entityModel(entityData);
    return entity.save();
  }

  async update(
    entityFilterQuery: FilterQuery<T>,
    entityData: UpdateQuery<unknown>,
  ): Promise<T | null> {
    return this.entityModel.findOneAndUpdate(entityFilterQuery, entityData, {
      new: true,
    });
  }

  async delete(entityFilterQuery: FilterQuery<T>): Promise<boolean> {
    const deleteResult = await this.entityModel.deleteMany(entityFilterQuery);
    return deleteResult.acknowledged;
  }
}
