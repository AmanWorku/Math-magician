import { Link } from 'react-router-dom';

const Navigation = () => {
  <div>
    <h1 className="link-name">Math Magicians</h1>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </div>
  </div>;
};

export default Navigation;
