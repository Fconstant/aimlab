import { atomWithReducer } from "jotai/utils";

export function atomWithCompare<V>(
  initialValue: V,
  areEqual: (prev: V, next: V) => boolean
) {
  return atomWithReducer(initialValue, (prev: V, next: V) => {
    if (areEqual(prev, next)) {
      return prev;
    }
    return next;
  });
}
