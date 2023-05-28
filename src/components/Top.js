import {Link} from 'react-router-dom'

export default function Top() {
    return (
        <div className="container menu">
            <div className="row">
                <div className="col-12 col-sm-7">
                    <ul className="left">
                        <li><Link to='/'>Logo</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-5">
                    <ul  className="right">
                        <li><Link to='/Cart'>Cart: </Link>
                        <a href='#cart-number'>0</a>
                        </li>
                        <li><Link to='/login'>SignIn</Link></li>
                        <li><Link to='/register'>SignUp</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}