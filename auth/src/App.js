import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

const generateClassName = createGenerateClassName({
    productionPrefix: "au"
});

export default ({history, onSignIn}) => {
    return (
        <div>
            <Router history={history}>
                <StylesProvider generateClassName={generateClassName}>
                    <Switch>
                        <Route path="/auth/signin">
                            <Signin onSignIn={onSignIn} />
                        </Route>
                        <Route path="/auth/signup">
                            <Signup onSignIn={onSignIn} />
                        </Route>
                    </Switch>
                </StylesProvider>
            </Router>
        </div>
    );
};