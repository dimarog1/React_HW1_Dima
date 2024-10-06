export type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};
// --- MyPick example ---
type Bottle = {
    volume: number;
    material: string;
    price: number;
};

const bottle: MyPick<Bottle, 'volume'> = {
    volume: 0.5
};
console.log(bottle);
// --- end ---

export type NOfArray<ArrayObj extends any[], N extends number> = ArrayObj[N];
// --- NOfArray example ---
const num: NOfArray<[1, 2, 3, 4], 1> = 2;
console.log(num);
// --- end ---

export type Unshift<ArrayType, Element> = [Element, ...ArrayType[]];
// --- Unshift example ---
const arr: Unshift<boolean, string> = ['example', true, true, false];
console.log(arr);
// --- end ---

export type MyExclude<T, U> = T extends U ? never : T;
// --- MyExclude example ---
const remains: MyExclude<true | false | 1, true> = false;
console.log(remains);