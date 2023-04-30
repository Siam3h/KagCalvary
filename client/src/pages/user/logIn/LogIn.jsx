import { useContext, useRef } from "react";
import "./logIn.css";
import { Context } from "../../../context/Context";
import axios from "axios";


function LogIn() {

	const userRef = useRef();
	const passwordRef = useRef();
	const { dispatch, isFetching } = useContext(Context);


	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });
		try {
			const res = await axios.post("/auth/login", {
				username: useRef.current.value,
				password: passwordRef.current.value,
			})
			dispatchEvent({ type: "LOGIN_SUCCESS", payload: res.data });
			window.location.replace("/")
		} catch (err) {
			dispatch({ type: "LOGIN_FAILURE" });
		}
	}


	return (
		<div className="logIn">
			<span className="logInTitle">LogIn</span>
			<form className="logInForm" onSubmit={handleSubmit}>
				<label>Username</label>
				<input type="text" className="logInInput" placeholder="Enter Your Username..." ref={userRef} />
				<label>Password</label>
				<input type="text" className="logInInput" placeholder="Enter Your Password..." ref={passwordRef} />
				<button className="logInButton" type="submit" disabled={isFetching}>LogIn</button>
			</form>
		</div>

	);
}

export default LogIn;