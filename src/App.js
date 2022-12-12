import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import TvSeriesMain from './TvShows/TvSeriesMain';
import Home from './TvShows/Home';
import TVSeriesDetail from './TvShows/TVSeriesDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/series' element={< TvSeriesMain />}></Route>
        <Route exact path='/series-detail' element={< TVSeriesDetail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
