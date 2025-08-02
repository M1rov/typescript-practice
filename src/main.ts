/*
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
*/

/*
// 'any' is a super type and subtype for all the types at the same time

// 'unknown' type
// Supertype for all the types, but cannot be subtype

const func = (data: unknown) => {
  if(typeof data !== 'string') {
    throw new Error(`${data} is not a string`);
  }
  const name: string = data;
  return name
}

console.log(func(123))
*/
/*

enum Values {
  First,
  Second,
  Third
}

function assertNever(value: never) {
}

function fn(value: Values) {
  switch (value) {
    case Values.First:
      console.log(value, '1st')
      return;
    case Values.Second:
      console.log(value, '2nd');
      return;
    default:
      assertNever(value)
  }
}

fn(Values.First)*/

