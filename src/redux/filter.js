import { SHOW_ALL, SHOW_COMPLETE } from "./action";
const initialfilter = "All";
export default function filterReducer(previousState = initialfilter, action) {
  //   if (previousState === undefined) {
  //     return [];
  //   }

  if (action.type === SHOW_ALL) return "All";

  if (action.type === SHOW_COMPLETE) return "Complete";
  return previousState;
}
