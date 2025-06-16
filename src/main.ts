type SuperType = {
  name: string;
};

type SubType = {
  name: string;
  age: number;
};

const subType: SubType = { name: "Alex", age: 32 };
const superType: SuperType = subType;

console.log(superType);
