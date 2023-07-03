import React from "react";
import "./Register.css"
import Navbar from "./Navbar";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function Registration() {
    const [email, updateEmail] = React.useState()
const navigate=useNavigate()
    const setEmail = (e) => {

        updateEmail(e.target.value)
        updateEmail({
            ...email,
            [e.target.name]: e.target.value
        })
    }

    //post employe api.................................
    const Formsubmit = async (e) => {
        e.preventDefault();
setTimeout(() => {
    navigate("/list")
}, 4000);
        const response = await fetch('http://localhost:8080/emp-post', {
            method: 'POST',
            body: JSON.stringify(email),

            headers: {
                'Content-Type': 'application/json'
            }
        })

        const getdata = await response.json();
        console.log(getdata)
        toast.success("user created")

    }
    return (
        <>

            <Navbar />
            <div class="testbox">

                <ToastContainer position="top-right" />
                <h1>Registration</h1>

                <form onSubmit={Formsubmit}>
                    <hr />
                    <div class="accounttype">
                        <input type="radio" value="None" id="radioOne" name="account" checked />
                        <label for="radioOne" class="radio" chec>Personal</label>
                        <input type="radio" value="None" id="radioTwo" name="account" />
                        <label for="radioTwo" class="radio">Company</label>
                    </div>
                    <hr />
                    <label id="icon" for="name"><i class="icon-envelope "></i></label>
                    <input onChange={setEmail}
                        id="email"
                        className="form__input"
                        placeholder="Enter your name"
                        type="text"
                        name="name"
                        required />
                    <label id="icon" for="name"><i class="icon-user"></i></label>
                    <input onChange={setEmail}
                        id="password"
                        className="app-form-control"
                        placeholder="enter your email"
                        type="email"
                        name="email"
                        required
                    />
                    <label id="icon" for="name"><i class="icon-shield"></i></label>
                    <input onChange={setEmail}
                        id="number"
                        className="app-form-control"
                        placeholder="enter your number"
                        type="text"
                        name="number"
                        required />
                    <div class="gender">
                        <input type="radio" value="None" id="male" name="gender" checked />
                        <label for="male" class="radio" chec>Male</label>
                        <input type="radio" value="None" id="female" name="gender" />
                        <label for="female" class="radio">Female</label>
                    </div>
                    <p>By clicking Register, you agree on our <a href="#">terms and condition</a>.</p>
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    )
}

export { Registration }