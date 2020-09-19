/**
 * @author WMXPY
 * @namespace Wave
 * @description Wave
 */

export class Wave<T extends Record<string, any>> {

    public static create<T extends Record<string, any>>(initial: T): Wave<T> {

        return new Wave<T>(initial);
    }

    private readonly _data: T;

    private constructor(initial: T) {

        this._data = initial;
    }
}