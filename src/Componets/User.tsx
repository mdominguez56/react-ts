import { useState } from "react";

interface User {
  uid: String;
  name: String;
}

const UserInfo = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: "ABC123",
      name: "Matias Dominguez Alonso",
    });
  };
  return (
    <div className="mt-5">
      <h3>User</h3>
      <button className="btn btn-primary" onClick={login}>
        Login
      </button>
      {!user ? (
        <pre>User doesn't exist</pre>
      ) : (
        <pre>{JSON.stringify(user)}</pre>
      )}
    </div>
  );
};

export default UserInfo;
