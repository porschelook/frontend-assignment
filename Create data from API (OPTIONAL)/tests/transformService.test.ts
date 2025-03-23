import { transformData } from "../services/transformService";
import { User } from "../types/userTypes";

const mockUsers: User[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 25,
    gender: "male",
    hair: { color: "Black" },
    address: { postalCode: "12345" },
    department: "Engineering",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 30,
    gender: "female",
    hair: { color: "Blond" },
    address: { postalCode: "54321" },
    department: "Engineering",
  },
];

test("Transforms user data correctly", () => {
  const result = transformData(mockUsers);
  expect(result).toEqual({
    Engineering: {
      male: 1,
      female: 1,
      ageRange: "25-30",
      hair: { Black: 1, Blond: 1 },
      addressUser: { JohnDoe: "12345", JaneSmith: "54321" },
    },
  });
});
