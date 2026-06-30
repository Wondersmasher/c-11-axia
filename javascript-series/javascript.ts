console.log("Hello World!");

let typescriptAge: number = 10;
typescriptAge = 20;
typescriptAge = 11;

const typescriptName: string = "John";
const age: number = 30;
const hasKids: boolean = 8 < 10;

type Num = number;

const numNumber: Num = 10;

type NumOrString = number | string;

let num: NumOrString = 10;
num = "10";

type Status = "pending" | "approved" | "rejected" | "resolved";

const pending: Status = "pending";

const arr1: number[] = [1, 2, 3];
const arr2: string[] = ["a", "b", "c"];
const arr3: (string | number)[] = [1, "a", 2, "b", "c"];
const arr4: (string | number | boolean)[] = [1, "a", 2, "b", "c", false];

type Obj = {
  name?: string;
  age: number;
};

const obj1: Obj = {
  name: "9",
  age: 30,
};

interface Obj2 {
  name?: string;
  age: number;
}

const obj2: Obj2 = {
  name: "9",
  age: 30,
};

type BaseUserProfile = {
  firstName: string;
  lastName: string;
  age: number;
};

type UserAddress = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

const user: BaseUserProfile = {
  age: 30,
  firstName: "John",
  lastName: "Doe",
};

const userAddress: UserAddress = {
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
};

type CompleteUserProfile = BaseUserProfile & UserAddress;
const userWithAddress: CompleteUserProfile = {
  age: 30,
  firstName: "John",
  lastName: "Doe",
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
};

interface BaseUserProfileI {
  firstName: string;
  lastName: string;
  age: number;
}

interface UserAddressI {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface CompleteUserProfileI extends BaseUserProfileI, UserAddressI {}
const userWithAddressI: CompleteUserProfileI = {
  age: 30,
  firstName: "John",
  lastName: "Doe",
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
};

// Utility Types
// 1. Partial
// 2. Required
// 3. Readonly
// 4. Pick
// 5. Omit
// 6. Array
// 7. Record

// PARTIAL => makes all the fields optional

type CompleteUserProfilePartialI = Partial<CompleteUserProfileI>;
const userWithAddressPartialI: CompleteUserProfilePartialI = {
  age: 30,
  firstName: "John",
  lastName: "Doe",
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
};

// REQUIRED => makes all the fields required
type CompleteUserProfileRequiredI = Required<CompleteUserProfilePartialI>;
const userWithAddressRequiredI: CompleteUserProfileRequiredI = {
  age: 30,
  firstName: "John",
  lastName: "Doe",
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
};

// READONLY => makes all the fields readonly
type CompleteUserProfileReadonlyI = Readonly<CompleteUserProfilePartialI>;
const userWithAddressReadonlyI: CompleteUserProfileReadonlyI = {
  //   age: 30,
  //   firstName: "John",
  lastName: "Doe",
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
};

// PICK => allows you to pick from a type
type PickedUserDetails = Pick<
  CompleteUserProfileRequiredI,
  "firstName" | "lastName"
>;

// OMIT => allows you to omit from a type
type OmittedUserDetails = Omit<
  CompleteUserProfileRequiredI,
  "firstName" | "lastName"
>;

// ARRAY => allows you to create an array of a specific type
type ArrayOfNumbers = Array<number>;
const arrayOfNumbers: ArrayOfNumbers = [1, 2, 3, 4, 5];
type ArrayOfNumbersOrStrings = Array<number | string>;
const arrayOfNumbersOrStrings: ArrayOfNumbersOrStrings = [1, "2", 3, "4", 5];
type ArrayOfUserObjects = Array<CompleteUserProfileI>;
const userObjects: ArrayOfUserObjects = [
  {
    age: 10,
    city: "Anytown",
    firstName: "John",
    lastName: "Doe",
    street: "123 Main St",
    state: "CA",
    zip: "12345",
  },
  {
    age: 20,
    city: "Anytown",
    firstName: "John",
    lastName: "James",
    street: "123 Main St",
    state: "CA",
    zip: "12345",
  },
  {
    age: 10,
    city: "Anytown",
    firstName: "John",
    lastName: "Doe",
    street: "123 Main St",
    state: "CA",
    zip: "12345",
  },
  {
    age: 10,
    city: "Anytown",
    firstName: "John",
    lastName: "Doe",
    street: "123 Main St",
    state: "CA",
    zip: "12345",
  },
  {
    age: 10,
    city: "Anytown",
    firstName: "John",
    lastName: "Doe",
    street: "123 Main St",
    state: "CA",
    zip: "12345",
  },
];

// RECORD => allows you to create a record of a specific type
type UserRecord = Record<string, CompleteUserProfileI>;
const userRecord: UserRecord = {
  "1": {
    age: 10,
    city: "Anytown",
    firstName: "John",
    lastName: "Doe",
    street: "123 Main St",
    state: "CA",
    zip: "12345",
  },
  "2": {
    age: 10,
    city: "Anytown",
    firstName: "John",
    lastName: "Doe",
    street: "123 Main St",
    state: "CA",
    zip: "12345",
  },
};

// Assessment:
// 1. Write a function that takes in 2 numbers and consoles the sum of those numbers. If either of the numbers is not a number, return "Invalid input".
// 2. Write a function that takes an object and console log every key and value in that argument.
// NOTE: YOU MUST USE TYPESCRIPT
// TIME ALLOWED: 15 MINS

// MY SOLUTION

// 1.
const addition = (num1: number, num2: number) => {
  try {
    console.log(num1 + num2);
  } catch (error) {
    console.log(`Invalid input with error: ${error}`);
  }
};
const two: number = 2;

addition(1, 2);
addition(30, 99);
// addition("30", 99);

// 2.
type ObjAssignment = Record<string, string>;

const payload1: ObjAssignment = {
  name: "John Doe",
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
};
const payload2: ObjAssignment = {
  name: "John James",
  street: "321 False St",
  city: "This town",
  state: "12345",
  zip: "CA1234",
};

const printObj = (obj: ObjAssignment) => {
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
};
printObj(payload1);
printObj(payload2);
