import { Link } from 'react-router-dom';
import './ErrorRoute.css';

export function ErrorRoute() {
    return (
        <div className='route__error'>
            <Link to="/">Error 404</Link>
        </div>
    );
}