import { hash } from "bcryptjs";
import { getConnection } from "typeorm";
import { v4 as uuidv4 } from "uuid";

async function create() {
  const connection = getConnection();
  const id = uuidv4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSER INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license) value('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXXXXX')`
  );
}
