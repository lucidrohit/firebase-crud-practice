import "./register-user.styles.scss"
import { useState } from "react";
import { createUser } from "./../../utils/firebase.utils"

function RegisterUser() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const userDoc = { name, email }
        setName("")
        setEmail("")
        await createUser(userDoc)
    }

    return (
        <div className="register-user">
            <form className="form" onSubmit={handleFormSubmit}>
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

export default RegisterUser;
