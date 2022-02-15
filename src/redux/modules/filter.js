import { createActions, handleActions } from "redux-actions";

const initialfilter = "All";

const { SHOW_ALL, SHOW_COMPLETE } = createActions("SHOW_ALL", "SHOW_COMPLETE", {
  prefix: "redux-start/filter/",
});
const reducer = handleActions(
  {
    SHOW_ALL: (state, action) => "ALL",
    SHOW_COMPLETE: () => "Complete",
  },
  initialfilter,
  { prefix: "redux-start/filter/" }
);

export default reducer;
