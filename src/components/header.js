import { NavLink } from 'react-router-dom';

const links = [
  { id: 0, path: '/', text: 'Books' },
  { id: 1, path: '/categories', text: 'Categories' },
];

const Header = () => (
  <header className="panel-bg">
    <div>
      <span className="Bookstore-CMS">Book Store</span>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} activeClassName="active-link" exact>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    <span><img src="/user.png" alt="user-button" /></span>
  </header>
);

export default Header;
