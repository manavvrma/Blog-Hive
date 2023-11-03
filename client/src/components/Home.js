import React, { useEffect } from 'react';
import { useHistory} from 'react-router-dom';

function Home() {
    const history = useHistory();
    

    useEffect(() => {
        const timer = setTimeout(() => {
            history.push('/posts');
        }, 3000);

        return () => clearTimeout(timer);
    }, [history]);

    return (
        <div className="homepage">
            <h1>Welcome to BlogHive</h1> 
            <h3>Redirecting.....</h3> 
        </div>
    );
}

export default Home;
