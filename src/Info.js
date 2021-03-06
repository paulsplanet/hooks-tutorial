import React, { useEffect, useState } from "react";

const Info = () => {
    const [name, setName] = useState();
    const [nickname, setNickname] = useState();
    useEffect(() => {
        console.log("Effect");
        console.log(name);
        return () => {
            console.log("cleanup");
            console.log(name);
        }
    }, [name]);

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>Name: </b>{name}
                </div>
                <div>
                    <b>Nickname: </b>{nickname}
                </div>
            </div>
        </div>
    )
};

export default Info;