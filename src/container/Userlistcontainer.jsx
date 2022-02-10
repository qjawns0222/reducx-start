import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Userlist from "../component/Userlist";
import { electThunk } from "../redux/action";

export default function Todolistcontainer() {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  const dataElect = useCallback(() => {
    dispatch(electThunk());
  }, [dispatch]);

  return <Userlist users={users} dataelect={dataElect} />;
}
