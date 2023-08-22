import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

const Category = () => {
    const { id } = useParams()
    // console.log(id);
    const categoryNews = useLoaderData()
    return (
        <div>
            {id && <h2>This Category News: {categoryNews.length}</h2>}
            {
                categoryNews.map(news => <NewsCard key={news._id}
                    news={news}></NewsCard>)
            }

        </div>
    );
};

export default Category;