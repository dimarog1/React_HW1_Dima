export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
// --- DeepPartial example ---
type Bottle = {
    volume: number;
    materials: {
        baseMaterial: string,
        capMaterial: string
    }
    price: number;
};
const bottle: DeepPartial<Bottle> = {
    price: 150,
    materials: {
        capMaterial: "plastic"
    }
};
console.log(bottle)
// --- end ---

export type MyCapitalize<T extends string> = T extends
    `${infer FirstLetter}${infer OtherLetters}` ? `${Uppercase<FirstLetter>}${OtherLetters}` : T;
// --- MyCapitalize example ---
type CustomCapitalize = MyCapitalize<"texttexttext">
const text: CustomCapitalize = "Texttexttext";
console.log(text)
// --- end ---

export type DeepMutable<T> = {
    -readonly [P in keyof T]: T[P] extends object ? DeepMutable<T[P]> : T[P];
};
// --- DeepMutable example ---
interface ReadonlyNumbers {
    readonly A: number,
    readonly B: {
        readonly x: number,
        readonly y: number
    }
}
const mutableNumbers: DeepMutable<ReadonlyNumbers> = {
    A: 5,
    B: {
        x: 0,
        y: 0
    }
}
mutableNumbers.B.y = 1;
console.log(mutableNumbers);
// --- end ---

export type ParseURLParams<StringElem extends string> = StringElem extends
    `${infer Base}:${infer Parameter}/${infer Remains}`
    ? Parameter | ParseURLParams<`/${Remains}`>
    : StringElem extends `${infer Base}:${infer Parameter}`
    ? Parameter
    : never
// --- ParseURLParams example ---
type URLParams = ParseURLParams<'posts/:id/:user'>;
const param: URLParams = 'user';
console.log(param);
// --- end ---