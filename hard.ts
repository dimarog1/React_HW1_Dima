type ToCamelCase<S extends string> = S extends `${infer A}_${infer B}`
    ? `${A}${Capitalize<ToCamelCase<B>>}`
    : S;

export type Camelize<ObjectType> = {
    [K in keyof ObjectType as ToCamelCase<Extract<K, string>>]: ObjectType[K] extends object
    ? Camelize<ObjectType[K]>
    : ObjectType[K];
};
// --- Camelize example ---
type SnakeCaseExample = {
    x_field: {
        x_field_nested: boolean;
    },
    y_field: {
        y_field_nested: boolean;
    }
};
const camelized: Camelize<SnakeCaseExample> = {
    xField: {
        xFieldNested: true
    },
    yField: {
        yFieldNested: true
    }
};
console.log(camelized);
// --- end ---

export type DeepPick<T, Paths extends string> = Paths extends `${infer Base}.${infer Other}`
    ? Base extends keyof T
    ? { [K in Base]: DeepPick<T[Base], Other> }
    : never
    : Paths extends keyof T
    ? { [K in Paths]: T[K] }
    : never;
// --- DeepPick example ---
interface Bottle {
    volume: number,
    materials: {
        baseMaterial: string,
        capMaterial: string
    },
    price: number
}
const bottle: DeepPick<Bottle, "volume" | "materials.capMaterial"> = {
    materials: {
        capMaterial: "plastic"
    }
}
console.log(bottle);
// --- end ---