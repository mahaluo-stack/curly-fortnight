import React, { useState } from "react";
import styled from 'styled-components';

import { palette } from '../base';

const Styled = {
    Container: styled.div`
        width: 40vw;
        height: 75vh;
        margin: 50px auto;
        border: 4px solid ${palette.main};
        border-radius: 15px;
    `,
    NameField: styled.input`
        width: 90%;
        display: block;
        margin: 2% auto;
        padding: 0;
        type: 'name';
    `,
    AddressField: styled.input`
        width: 90%;
        display: block;
        margin: 2% auto;
        padding: 0;
        type: 'address';
    `,
};


export function AddStudent() {

    const [student, setStudent] = useState({
        name: "",
        address: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(student);

        setStudent({
            name: "",
            address: ""
        });

        fetch("http://localhost:8080/student/add", {
            method:"POST",
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(student)

        }).catch((error) => {
            console.log("POST ERROR:", error);
        }).then(() => {
            console.log("POST SUCCESS");
        });
    }

    return (

        <Styled.Container>
            <form style={{ margin: "40px auto", display: "flex", flexDirection: "column", height: "200px" }} onSubmit={handleSubmit}>
                <label style={{ margin: "auto", width: "60%", height: "50px" }} htmlFor="name">
                    Name:
                    <Styled.NameField
                        id="name"
                        type="text"
                        value={student.name}
                        onChange={(e) => setStudent({ ...student, name: e.target.value })}
                    />
                </label>
                <label style={{ margin: "auto", width: "60%", height: "50px" }} htmlFor="address">
                    Address:
                    <Styled.AddressField
                        id="address"
                        type="text"
                        value={student.address}
                        onChange={(e) => setStudent({ ...student, address: e.target.value })} />
                </label>
                <button style={{ margin: "auto", width: "60%", height: "30px" }} type="submit">Submit</button>
            </form>
        </Styled.Container>
    )
}