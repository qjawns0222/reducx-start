const SHOW_ALL = "redux-start/filter/SHOW_ALL";
const SHOW_COMPLETE = "redux-start/filter/SHOW_COMPLETE";
export function showAll() {
  return { type: SHOW_ALL };
}
export function showComplete() {
  return { type: SHOW_COMPLETE };
}
const initialfilter = "All";
export default function reducer(previousState = initialfilter, action) {
  //   if (previousState === undefined) {
  //     return [];
  //   }

  if (action.type === SHOW_ALL) return "All";

  if (action.type === SHOW_COMPLETE) return "Complete";
  return previousState;
}
