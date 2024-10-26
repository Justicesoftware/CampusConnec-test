import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StudyGroup from './pages/StudyGroup';
import Event from './pages/Event';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/study-groups" component={StudyGroup} />
        <Route path="/events" component={Event} />
        {/* Add more routes as needed */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
