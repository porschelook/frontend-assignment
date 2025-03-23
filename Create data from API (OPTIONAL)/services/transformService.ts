import { User, TransformedData } from "../types/userTypes";

export const transformData = (users: User[]): TransformedData => {
  return users.reduce<TransformedData>((acc, user) => {
    const { department, gender, age, hair, firstName, lastName, address } = user;

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

    // Update gender count
    deptData[gender]++;

    // Update age range
    const [minAge, maxAge] = deptData.ageRange.split("-").map(Number);
    deptData.ageRange = `${Math.min(minAge, age)}-${Math.max(maxAge, age)}`;

    // Update hair color count
    deptData.hair[hair.color] = (deptData.hair[hair.color] || 0) + 1;

    // Store address user
    deptData.addressUser[`${firstName}${lastName}`] = address.postalCode;

    return acc;
  }, {});
};
