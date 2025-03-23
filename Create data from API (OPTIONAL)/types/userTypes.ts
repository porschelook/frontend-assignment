interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: { lat: number; lng: number };
  country: string;
}

interface Hair {
  color: string;
  type: string;
}

interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

export interface User {
  id: number;
  firstName: string;
   
  lastName: string;
  gender: string;
   
  age: number;
  hair: Hair;
  address: Address;
  company: Company;
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
