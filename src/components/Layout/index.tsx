import { Link } from "react-router-dom";
import { UserProfile } from "../UserProfile";
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="app-layout">
      <nav className="sidebar">
        <UserProfile />
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/playlists">Playlists</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
      </nav>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};