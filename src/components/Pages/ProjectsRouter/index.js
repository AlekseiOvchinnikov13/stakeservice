import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Project from '../Project';
import Home from '../Home';

const ProjectsRouter = () => {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${match.path}/:projectId`} component={Project}/>
        <Route path={match.path} component={Home}/>
      </Switch>
    </>
  );
};

export default ProjectsRouter;