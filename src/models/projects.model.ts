import { RowDataPacket, ResultSetHeader } from "mysql2";
import connection from "../helpers/connection";

import IProject from "../interfaces/project.interface";

export default class ProjectModel {
  async getAll(): Promise<IProject<number>[]> {
    const [result] = await connection.execute<RowDataPacket[]>(`
      SELECT *, FROM projects;
    `);

    return result as IProject<number>[];
  };

  async create(payload: IProject<number>): Promise<IProject<number>> {
    const [dataInserted] = await connection.execute<ResultSetHeader>(`
      INSERT INTO projects (title, description, thumbnail) VALUES
        (?, ?, ?);
    `, [payload.title, payload.description, payload.thumbnail]);

    payload.id = dataInserted.insertId;
    return payload;
  };

  async editAll(payload: IProject<number>): Promise<IProject<number>> {
    await connection.execute<ResultSetHeader>(`
      UPDATE projects
      SET title = ?, description = ?, thumbnail = ?
      WHERE id = ?
    `, [payload.title, payload.description, payload.thumbnail, payload.id]);
  
    return payload;
  };
  
  async exclude(id: number): Promise<void> {
    await connection.execute(`
      DELETE FROM projects 
      WHERE id = ?
    `, [id]);
  };
}
