import { useEffect, useState } from 'react';
import '../style/idea.css';
import axios from 'axios';

const URL = 'http://localhost:3003/ideas';

function Idea() {
    const [ideas, setIdeas] = useState([]);

    useEffect(() => {
        axios.get(URL, { withCredentials: true }).then((res) => {
            setIdeas(res.data);
        });
    }, []);

    return (
        <div className="idea">
            <div className="left">
                <div className="picture">FOTO</div>
                <div className="sum">
                    <div className="askedSum">SUM</div>
                    <button className="btn donate">Donate</button>
                </div>
            </div>
            <div className="right">
                <div className="header">HEADER</div>
                <div className="description">DESCRIPTION</div>
            </div>
        </div>
    );
}
export default Idea;
