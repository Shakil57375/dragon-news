import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const categoryNews = useLoaderData()
    // console.log(categoryNews);
    const {id} = useParams()
    return (
        <div>
            {
                id && <h2>This is a category {categoryNews.length}</h2>
            }
            {
                categoryNews.map(news => <NewsCard
                key = {news._id}
                news = {news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;