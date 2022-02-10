import { DATA_END, DATA_ERROR, DATA_START } from "./action";

export default function users(
  state = { loading: false, data: [], error: null },
  action
) {
  if (action.type === DATA_ERROR)
    return { ...state, loading: false, error: action.error };
  if (action.type === DATA_START)
    return { ...state, loading: true, error: null };
  if (action.type === DATA_END)
    return { ...state, loading: false, data: action.text };
  return state;
}
