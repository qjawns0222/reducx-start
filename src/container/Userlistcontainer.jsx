import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Userlist from "../component/Userlist";
import { getUsersPromise } from "../redux/modules/users";

export default function Todolistcontainer() {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(users);

  const dataElect = useCallback(() => {
    dispatch(getUsersPromise());
  }, [dispatch]);

  return <Userlist users={users} dataelect={dataElect} />;
}
