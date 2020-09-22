/**
 * @author WMXPY
 * @namespace Wave
 * @description Wave
 */

import { compare, CompareResult } from "@sudoo/compare";

export class Wave<T extends Record<string, any> = any> {

    public static create<T extends Record<string, any> = any>(initial: T): Wave<T> {

        return new Wave<T>(initial);
    }

    private readonly _data: T;

    private constructor(initial: T) {

        this._data = initial;
    }

    public get data(): T {
        return this._data;
    }

    public update(newData: T): CompareResult[] {

        const changes: CompareResult[] = compare(this._data, newData);

        return changes;
    }
}
