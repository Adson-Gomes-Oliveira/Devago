import IResult from './result.interface';

interface IService {
  getAll(): Promise<IResult>;
  getAllWithCategories(): Promise<IResult>;
  getByID(id: number): Promise<IResult>;
  create(payload: unknown): Promise<IResult>;
  edit(payload: unknown): Promise<IResult>;
  exclude(id: number): Promise<IResult>;
}

export interface IMinService {
  getAll(): Promise<IResult>
}

export default IService;
