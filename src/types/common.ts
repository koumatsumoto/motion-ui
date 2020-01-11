export type DoubleDimensionalArray<T> = T[][];
export type ValueOf<T> = T[keyof T];
export type Constructor<T> = { new (...args: unknown[]): T };
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>;
};
export type Writeable<T> = { -readonly [P in keyof T]: T[P] };
export type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

export interface FixedLengthArray<T extends any, L extends number> extends Array<T> {
  [index: number]: T;
  length: number;
}

/**
 * Creates a union from the types of an Array or tuple
 */
type UnionOf<T extends any[]> = T[number];
/**
 * Returns the length of an array or tuple
 */
export type LengthOf<T extends any[]> = T['length'];
/**
 * Returns all but the first item's type in a tuple/array
 */
export type Tail<T extends any[]> = ((...args: T) => any) extends (head: any, ...tail: infer R) => any ? R : never;
/**
 * Returns the given tuple/array with the item type prepended to it
 */
type Unshift<List extends any[], Item> = ((first: Item, ...rest: List) => any) extends (...list: infer R) => any ? R : never;
/**
 * Tests if two types are equal
 */
type Equals<T, S> = [T] extends [S] ? ([S] extends [T] ? true : false) : false;

type Range<N, T extends number[] = []> = {
  0: T;
  1: Range<N, Unshift<T, LengthOf<T>>>;
}[Equals<LengthOf<Tail<T>>, N> extends true ? 0 : 1];
