import './App.css';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';


function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route exact path="/about" component={About} />
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </Layout>
  );
}

export default App;
