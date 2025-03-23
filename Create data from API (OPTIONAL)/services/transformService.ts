import { User, TransformedData } from "../types/userTypes";

export const transformData = (users: User[]): TransformedData => {
  return users.reduce<TransformedData>((acc, user) => {
    const { company, gender, age, hair, firstName, lastName, address } = user;
    const department = company.department;

    if (!acc[department]) {
      acc[department] = {
        male: 0,
        female: 0,
        ageRange: `${age}-${age}`,
        hair: {},
        addressUser: {},
      };
    }

    const deptData = acc[department];

    if (gender === "male" || gender === "female") {
      deptData[gender]++;
    }

    const [minAge, maxAge] = deptData.ageRange.split("-").map(Number);
    deptData.ageRange = `${Math.min(minAge, age)}-${Math.max(maxAge, age)}`;

    deptData.hair[hair.color] = (deptData.hair[hair.color] ?? 0) + 1;

    deptData.addressUser[`${firstName}${lastName}`] = address.postalCode;

    return acc;
  }, {});
};
