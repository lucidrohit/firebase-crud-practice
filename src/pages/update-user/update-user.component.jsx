import "./update-user.styles.scss"
import { useState } from "react";
import { updateUser } from "./../../utils/firebase.utils"

function UpdateUser() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [id, setId] = useState("")

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const userDoc = { name, email }
        const userId = id.trim()
        setName("")
        setEmail("")
        setId("")
        await updateUser(userId, userDoc)
    }

    return (
        <div className="register-user">
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="form__input">
                    <label htmlFor="id">
                        Id:
                    </label>
                    <input type="text" placeholder="Id..." value={id} id="id" name="id" onChange={(event) => setId(event.target.value)} />
                </div>
                <div className="form__input">
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input type="text" placeholder="Name..." value={name} id="name" name="name" onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="form__input">
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input type="email" id="email" placeholder="Email..." value={email} name="email" onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="form__submit_btn">
                    <button className="btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateUser;
