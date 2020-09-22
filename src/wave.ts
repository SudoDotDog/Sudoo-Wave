/**
 * @author WMXPY
 * @namespace Wave
 * @description Wave
 */

import { compare, CompareResult } from "@sudoo/compare";
import { ListenerFunction } from "./declare";

export class Wave<T extends Record<string, any> = any> {

    public static create<T extends Record<string, any> = any>(initial: T): Wave<T> {

        return new Wave<T>(initial);
    }

    private readonly _data: T;
    private readonly _listeners: Set<ListenerFunction<T>>;

    private constructor(initial: T) {

        this._data = initial;
    }

    public get data(): T {
        return this._data;
    }

    public listen(listener: ListenerFunction<T>): this {

        this._listeners.add(listener);
        return this;
    }

    public update(newData: T): CompareResult[] {

        const changes: CompareResult[] = compare(this._data, newData);

        return changes;
    }
}
