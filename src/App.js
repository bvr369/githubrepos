import {Route, Switch} from 'react-router-dom'
import './App.css'
import MostStarredRepos from './components/MostStarredRepos'
import RepoDetails from './components/RepoDetails'

const App = () => (
  <Switch>
    <Route exact path="/" component={MostStarredRepos} />
    <Route path="/:name/:id" component={RepoDetails} />
  </Switch>
)

export default App
