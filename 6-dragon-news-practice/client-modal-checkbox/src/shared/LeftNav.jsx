
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/categories';
        fetch(url)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h1 className="text-2xl">All category</h1>
            <div className="space-y-2 cursor-pointer">
                {
                    categories.map(category => <p
                        key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>

        </div>
    );
};

export default LeftNav;