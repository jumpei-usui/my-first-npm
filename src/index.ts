export interface Person {
  first: string;
  last: string;
}

export const printMsg = (): void => {
  console.log("This is ES module");
};

export const hello = (person: Person): void => {
  console.log(`Hello ${person.first} ${person.last}!`);
};
