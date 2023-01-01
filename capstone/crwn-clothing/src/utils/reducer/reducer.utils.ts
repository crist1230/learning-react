import { AnyAction } from 'redux';

type Matchable<ActionCreator extends () => AnyAction> = ActionCreator & {
  type: ReturnType<ActionCreator>['type'];
  match(action: AnyAction): action is ReturnType<ActionCreator>;
}

export function withMatcher<AC extends () => AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>;

export function withMatcher<AC extends (...args: any[]) => AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>;

// withMatcher is a function that will return an object with key-value type, and a method that returns a boolean
export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
};

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
