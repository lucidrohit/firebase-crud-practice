import "./home.styles.scss"
import { useState, useEffect, useRef } from "react";
import { getUsers } from "./../../utils/firebase.utils"
import ClipLoader from "react-spinners/ClipLoader";

function Home() {
  const divRef = useRef()
  const [users, setUsers] = useState([])
  const [content, setContent] = useState(null)


  const ListUser = (usersList) => <ul style={{ listStyle: "none" }}>
    {usersList.map(({ name, email, id }) => (
      <li key={id}>
        <h1>{name[0].toUpperCase() + name.slice(1)}</h1>
        <p>{email}</p>
        <p>{id}</p>
      </li>
    ))}
  </ul>

  useEffect(() => {
    const getUsersList = async () => {
      const usersList = await getUsers()
      setUsers(usersList)
      setContent(ListUser(users))
    }
    getUsersList()

  }, [users])


  return (
    <div className="home" ref={divRef}>
      {content ? content : <ClipLoader size={150} />}
    </div>
  );
}

export default Home;
