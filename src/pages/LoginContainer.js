import React, {useState} from "react";

import Login from "./Login";

const LoginContainer = () => {

    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleChange = e => {

        setForm({
            ...form,
                [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {

        e.preventDefault();

        /*let user = new User();

        user.setEmail(form.email);
        user.setPasswordU(form.passwordU);

        console.log(user);*/

    }

    return(
        <Login
            form={form}
            onSubmit={handleSubmit}
            onChange={handleChange}
        />
    );
}

export default LoginContainer;