import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {Home, Profile } from '../../Pages';

interface Props {
  props: any;
}

export const Routes: React.FC<Props> = ({props}) => {
	return (
		<Router>
			<Switch>
				<Route path="/profile"><Profile/></Route>
				<Route path="/"><Home {...props}/></Route>
			</Switch>
		</Router>
	);
};

export default Routes;
