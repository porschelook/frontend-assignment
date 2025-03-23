export interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: "male" | "female";
    hair: { color: string };
    address: { postalCode: string };
    department: string;
  }
  
  export interface TransformedData {
    [department: string]: {
      male: number;
      female: number;
      ageRange: string;
      hair: { [color: string]: number };
      addressUser: { [fullName: string]: string };
    };
  }
  