import "./del-user.styles.scss"
import { useState } from "react";
import { delDoc } from "./../../utils/firebase.utils"

function DelUser() {
    const [id, setId] = useState("")

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const userId = id.trim()
        setId("")
        await delDoc(userId)
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
                <div className="form__submit_btn">
                    <button className="btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default DelUser;
