import "./home.styles.scss"
import { useState, useEffect } from "react";
import { getUsers } from "./../../utils/firebase.utils"

function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsersList = async () => {
      const usersList = await getUsers()
      setUsers(usersList)
    }

    getUsersList()
  }, [])

  return (
    <div className="home">
      <ul style={{ listStyle: "none" }}>
        {users.map(({ name, email, id }) => (
          <li key={id}>
            <h1>{name[0].toUpperCase() + name.slice(1)}</h1>
            <p>{email}</p>
          </li>))}
      </ul>
    </div>
  );
}

export default Home;
