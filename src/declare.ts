/**
 * @author WMXPY
 * @namespace Wave
 * @description Declare
 */

import { CompareResult } from "@sudoo/compare";

export type ListenerFunction<T> = (changes: CompareResult[], newData: T, oldData: T) => any;

