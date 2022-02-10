import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';
import { IEntityRepository } from './entity.IRepository';

export abstract class EntityRepository<T extends Document> implements IEntityRepository<T> {
  constructor(protected readonly entityModel: Model<T>) {}

  async findOne(entityFilterQuery: FilterQuery<T>): Promise<T | null> {
    return this.entityModel
      .findOne(entityFilterQuery, {
        _id: 0,
        __V: 0,
      })
      .exec();
  }

  async findById(id: number): Promise<T | null> {
    return this.entityModel.findById(id);
  }

  async find(entityFilterQuery: FilterQuery<T>): Promise<T[] | null> {
    return this.entityModel.find(entityFilterQuery);
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
