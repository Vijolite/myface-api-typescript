import {Link} from 'react-router-dom';
import './Navbar.scss';

export function Navbar(){

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'blue'
      };

    return <div className="nav_top">
        <div className="nav_bg">
            
            <h1>Welcome to MyFace</h1>
            <nav>
                <Link to='/posts'>Posts  </Link>
                <Link to='/users'>Users  </Link>
            </nav>
        </div>
    </div>
}


// return <nav>

// <Link className="nav_link" to='/posts'>Posts  </Link>
// <Link className="nav_link" to='/users'>Users  </Link>
// </nav>


        //<Link to='/users' style={linkStyle}>Users  </Link>

        // {/* <Link to='/posts' style={linkStyle}><span  className="nav">Posts  </span></Link>
        // <Link to='/users' style={linkStyle}><span  className="nav">Users  </span></Link> */}
        // {/* <Link to='/posts' style={linkStyle}>Posts  </Link>
        // <Link to='/users' style={linkStyle}>Users  </Link> */}