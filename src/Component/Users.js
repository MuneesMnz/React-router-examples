import React from "react";
import { useNavigate, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [serachParams, setSearchparams] = useSearchParams();

  const showActiveUsers = serachParams.get("filter") === "active";

  let navigate = useNavigate();
  return (
    <div>
      <h2 onClick={() => navigate("1")}>User 1</h2>
      <h2 onClick={() => navigate("2")}>User 2</h2>
      <h2 onClick={() => navigate("3")}>User 3</h2>
      <Outlet />
      <div>
        <button onClick={() => setSearchparams({ filter: "active" })}>
          Active users
        </button>
        <button onClick={() => setSearchparams({})}>Reset Filter</button>
      </div>
      {showActiveUsers ? (
        <h2>Showing Active Users</h2>
      ) : (
        <h2>Showing All Users</h2>
      )}
    </div>
  );
};

export default Users;
