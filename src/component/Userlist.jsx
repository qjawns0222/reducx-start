import { useEffect } from "react";
import RE from "../hook/re";

export default function Userlist({ users, dataelect }) {
  useEffect(() => {
    dataelect();
  }, [dataelect]);
  console.log(users.data);

  if (users.length === 0) {
    return <div>데이터가 없습니다</div>;
  }
  return (
    <ul>
      {users.data.map((p) => {
        return <li key={p.id}>{p.login}</li>;
      })}
    </ul>
  );
}
