import { transformData } from "../services/transformService";
import { User } from "../types/userTypes";

const mockUsers: User[] = [
  {
    id: 1,
    firstName: "Emily",
    lastName: "Johnson",
    age: 25,
    gender: "male",
    hair: {
      color: "Black",
      type: "Curly",
    },
    address: {
      address: "626 Main Street",
      city: "Phoenix",
      state: "Mississippi",
      stateCode: "MS",
      postalCode: "29111",
      coordinates: {
        lat: -77.16213,
        lng: -92.084824,
      },
      country: "United States",
    },

    company: {
      department: "Engineering",
      name: "Dooley, Kozey and Cronin",
      title: "Sales Manager",
      address: {
        address: "263 Tenth Street",
        city: "San Francisco",
        state: "Wisconsin",
        stateCode: "WI",
        postalCode: "37657",
        coordinates: {
          lat: 71.814525,
          lng: -161.150263,
        },
        country: "United States",
      },
    },
  },
  {
    id: 2,
    firstName: "Michael",
    lastName: "Williams",
    age: 30,
    gender: "female",
    hair: {
      color: "Brown",
      type: "Curly",
    },
    address: {
      address: "385 Fifth Street",
      city: "Houston",
      state: "Alabama",
      stateCode: "AL",
      postalCode: "38807",
      coordinates: {
        lat: 22.815468,
        lng: 115.608581,
      },
      country: "United States",
    },

    company: {
      department: "Engineering",
      name: "Spinka - Dickinson",
      title: "Support Specialist",
      address: {
        address: "395 Main Street",
        city: "Los Angeles",
        state: "New Hampshire",
        stateCode: "NH",
        postalCode: "73442",
        coordinates: {
          lat: 79.098326,
          lng: -119.624845,
        },
        country: "United States",
      },
    },
  },
];

describe("Data Transformation", () => {
  it("should transform the data correctly", () => {
    const result = transformData(mockUsers);
    expect(result).toEqual({
      Engineering: {
        male: 1,
        female: 1,
        ageRange: "25-30",
        hair: {
          Black: 1,
          Brown: 1,
        },
        addressUser: {
          EmilyJohnson: "29111",
          MichaelWilliams: "38807",
        },
      },
    });
  });
});
