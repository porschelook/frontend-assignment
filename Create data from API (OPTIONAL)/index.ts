import { getUsers } from "./services/apiGetData";
import { transformData } from "./services/transformService";

const main = async () => {
  const users = await getUsers();
  const transformedData = transformData(users);
  console.log(JSON.stringify(transformedData, null, 2));
};

main();


