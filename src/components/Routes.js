import React, { useLayoutEffect } from 'react'
import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import MyList from '../pages/MyList';
import Projects from '../pages/Projects';

import ProjectArgusPage from '../pages/projects/ProjectArgus';
import PolarisPage from '../pages/projects/Polaris';
import BoostedTouchPage from '../pages/projects/BoostedTouch';

export default function Routes(props) {
    const location = useLocation();
    // Scroll to top if path changes
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <Switch>
            <Route path="/projects/project-argus">
                <ProjectArgusPage></ProjectArgusPage>
            </Route>
            <Route path="/projects/polaris">
                <PolarisPage></PolarisPage>
            </Route>
            <Route path="/projects/boosted-touch">
                <BoostedTouchPage></BoostedTouchPage>
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/mylist">
                <MyList db={props.db} />
            </Route>
            <Route path="/projects">
                <Projects></Projects>
            </Route>
            <Route path="/">
                <Home></Home>
            </Route>
        </Switch>
    )
}
