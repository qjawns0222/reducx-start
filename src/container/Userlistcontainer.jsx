import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Userlist from "../component/Userlist";
import { getUsersSagaStart } from "../redux/modules/users";

export default function Todolistcontainer() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const dataElect = useCallback(() => {
    dispatch(getUsersSagaStart());
  }, [dispatch]);

  return <Userlist users={users} dataelect={dataElect} />;
}
