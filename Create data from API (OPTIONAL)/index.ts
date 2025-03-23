import { fetchUsers } from "./services/apiService";
import { transformData } from "./services/transformService";

const main = async () => {
  const users = await fetchUsers();
  const transformedData = transformData(users);
  console.log(JSON.stringify(transformedData, null, 2));
};

main();


