import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

const mysqlServerProvider = {
  getList: async (resource) => {
    const [rows] = await connection
      .promise()
      .query(`SELECT * FROM ${resource}`);
    return rows;
  },
  getOne: async (resource, id) => {
    const [rows] = await connection
      .promise()
      .query(`SELECT * FROM ${resource} WHERE id = ?`, [id]);
    return rows[0];
  },
  getMany: async (resource, ids) => {
    const [rows] = await connection
      .promise()
      .query(`SELECT * FROM ${resource} WHERE id IN (?)`, [ids]);
    return rows;
  },
  getManyReference: async (resource, target, id) => {
    const [rows] = await connection
      .promise()
      .query(`SELECT * FROM ${target} WHERE ${resource}_id = ?`, [id]);
    return rows;
  },
  create: async (resource, data) => {
    const [rows] = await connection
      .promise()
      .query(`INSERT INTO ${resource} SET ?`, [data]);
    return { id: rows.insertId, ...data };
  },
  update: async (resource, id, data) => {
    await connection
      .promise()
      .query(`UPDATE ${resource} SET ? WHERE id = ?`, [data, id]);
    return { id, ...data };
  },
  updateMany: async (resource, ids, data) => {
    await connection
      .promise()
      .query(`UPDATE ${resource} SET ? WHERE id IN (?)`, [data, ids]);
    return ids.map((id) => ({ id, ...data }));
  },
  delete: async (resource, id) => {
    await connection
      .promise()
      .query(`DELETE FROM ${resource} WHERE id = ?`, [id]);
    return { id };
  },
  deleteMany: async (resource, ids) => {
    await connection
      .promise()
      .query(`DELETE FROM ${resource} WHERE id IN (?)`, [ids]);
    return ids.map((id) => ({ id }));
  },
};

export default mysqlServerProvider;
