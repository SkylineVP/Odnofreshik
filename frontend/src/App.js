import React      from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}                 from "react-router-dom";
import HomePage   from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";


function App() {
    return (<Router>
            <Switch>
                <Route path='/' exact children={HomePage}></Route>
                <Route path="/sign_in" render={SignInPage}></Route>
                <Route path="/sign_up">
                    <SignUpPage/>
                </Route>
            </Switch>
        </Router>


    );
}

export default App;
