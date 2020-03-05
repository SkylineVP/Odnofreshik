import React        from "react";
import {withRouter} from "react-router"

function HomePage(props) {
    console.log(props);
    return (
        <>
            <h1>Home</h1>
            <button onClick={() => {
                props.history.push('/sign_up');
            }}>Sign Up
            </button>
            <button onClick={() => {
                props.history.push('/sign_in');
            }}>Sign In
            </button>
        </>


    )


}

export default withRouter(HomePage);