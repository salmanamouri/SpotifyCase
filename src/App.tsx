import "./App.css";
import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProfile } from './components/UserProfile';
import { PlaylistList } from './components/PlaylistList';
import { SearchBar } from './components/SearchBar';
import { TrackList } from './components/TrackList';
import { authSelectors } from "./containers/auth/selectors";
import logo from "./logo.svg";
import { useGetUserQuery } from "./api/apiSlice";
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

  const { data: user } = useGetUserQuery(undefined, {
    skip: !accessToken
  });

  console.log(user);

  return (
    <div className="App">
      {accessToken ? (
        <Router>
        <Layout>
          <UserProfile />
          
          <Routes>
            <Route path="/" element={<UserProfile />} />
            <Route path="/playlists" element={<PlaylistList />} />
            <Route path="/search" element={<SearchBar />} />
          </Routes>
        </Layout>
      </Router>
      ) : (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      )}
    </div>
  );
};

export default App;
