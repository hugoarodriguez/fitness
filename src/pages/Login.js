import React from "react";
import { Link } from "react-router-dom";

import "../components/styles/Login.css";

function Login ({onSubmit, onChange, form}) {
    return(
        <div id="example-div" className="main-container d-flex justify-content-center align-items-center p-5" >
            <form className="text-center text-nowrap row">
                <div className="col login-form py-4 px-5 p-sm-3">
                    <div className="my-5">
                        <label className="fw-bold fs-4">INICIAR SESIÓN</label>
                    </div>
                    <div className="mb-3 mx-5">
                        <input 
                            type="email" 
                            className="form-control" 
                            name="email"
                            placeholder="Email"
                            onChange={onChange}
                            value={form.email}
                        />
                    </div>
                    <div className="mb-3 mx-5">
                        <input 
                            type="password" 
                            className="form-control" 
                            name="passwordU"
                            placeholder="Password" 
                            onChange={onChange}
                            //value={form.passwordU || ''}
                        />
                    </div>
                    <div className="d-grid gap-2 mx-5">
                        <button type="submit" className="btn btn-mores mb-3">
                            ENTRAR
                        </button>
                    </div>
                    <div className="mb-3 mx-5">
                        <label>Olvidaste tu contraseña?</label>
                    </div>
                </div>
                <div className="col register-form py-4 px-5 p-sm-3">
                    <div className="my-5 text-nowrap">
                        <label className="fw-bold fs-4">REGISTRATE</label>
                    </div>
                    <div className="mb-3 mx-5 text-start text-wrap">
                        <p>
                            ¿No tienes una cuenta? Crea<br />
                            una para poder ordenar tus <br />
                            postres y pasteles preferidos
                        </p>
                    </div>
                    <div className="d-grid gap-2 mx-5">
                        <Link to="/exercise/new" className="btn btn-outline-mores mb-3">
                            CREAR CUENTA
                        </Link>
                        
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;