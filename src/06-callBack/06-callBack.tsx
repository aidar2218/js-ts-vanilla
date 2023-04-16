import React, {ChangeEvent, MouseEvent} from "react";


export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name);
        // alert("user have been deleted");
    }

    const onNameChanged = () => {
        console.log("name changed")
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("age changed: " + event.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log("focus lost")
    }

    return (
        <div>Aidar
            <div>
                <textarea
                    onChange={onNameChanged}
                    onBlur={focusLostHandler}>
                    Aidar
                </textarea>
                <input onChange={onAgeChanged} type={"number"}/>
            </div>
            <button name="delete" onClick={deleteUser}>delete</button>
        </div>
    )

}