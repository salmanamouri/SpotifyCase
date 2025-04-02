import "./App.css";
import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProfile } from './components/UserProfile';
import { PlaylistList } from './components/PlaylistList';
import { SearchBar } from './components/SearchBar';
import { authSelectors } from "./containers/auth/selectors";
import { Layout } from "./components/Layout";

const App: FC = (): ReactElement => {
  const accessToken = useSelector(authSelectors.getAccessToken);

  if (!accessToken) {
    return (
      <div className="login-screen">
        <a href="/api/auth/login">Login with Spotify</a>
      </div>
    );
  }

  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<UserProfile />} />
            <Route path="/playlists" element={<PlaylistList />} />
            <Route path="/search" element={<SearchBar />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
