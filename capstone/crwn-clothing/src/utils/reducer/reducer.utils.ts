import { AnyAction } from 'redux';

// this type is an object with key values type and payload
export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

// this type is an object with key value type
export type Action<T> = {
  type: T;
};

// * Overload Signature
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

// * Overload Signature
export function createAction<T extends string>(type: T, payload: void): Action<T>;  

// * Implementation Signature
// // export const createAction = (type, payload) => ({ type, payload });
export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
};
