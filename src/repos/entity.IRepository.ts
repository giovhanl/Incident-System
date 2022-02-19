import { Document, FilterQuery, UpdateQuery } from 'mongoose';

export interface IEntityRepository<T extends Document> {
  findOne(entityFilterQuery: FilterQuery<T>): Promise<T | null>;

  findById(id: string): Promise<T | null>;

  find(entityFilterQuery: FilterQuery<T>): Promise<T[] | null>;

  create(entityData: unknown): Promise<T>;

  update(
    entityFilterQuery: FilterQuery<T>,
    entityData: UpdateQuery<unknown>,
  ): Promise<T | null>;

  delete(entityFilterQuery: FilterQuery<T>): Promise<boolean>;
}
