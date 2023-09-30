import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);
    const [category, setCategory] = useState('');


    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=10f8c2ee8d684d5bb43c781f6c1c23fe&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();

    }, [])


    const handlePreviousClick = async () => {
        console.log("Pre")
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=10f8c2ee8d684d5bb43c781f6c1c23fe&page=${page - 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setArticles(parsedData.articles)
        setPage(page - 1)

    }
    const handleNextClick = async () => {
        console.log("Next")
        if (page + 1 > Math.ceil(totalResults / props.pageSize)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=10f8c2ee8d684d5bb43c781f6c1c23fe&page=${page + 1}&pageSize=${props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            setArticles(parsedData.articles)
            setPage(page + 1)
        }

    }

    return (
        <div className="container  my-6  " >
            <h1 className="text-center" style={{marginTop:'80px'}}> <strong> These are the top headlines</strong> </h1>


            <div className="row ">
                {articles.map((element) => {
                    return <div className="col md-4  " key={element.url} >
                        <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 88) : ""}
                            imageurl={element.urlToImage}
                            newsurl={element.url} />
                    </div>
                })}



            </div>
            <div className="container ">
                <div className="d-flex justify-content-between my-2 ">
                    <button disabled={page <= 1} type="button" className="btn btn-info" onClick={handlePreviousClick}>&larr; Previous</button>
                    <button disabled={page >= Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-info" onClick={handleNextClick}>Next &rarr;</button>
                </div>

            </div>


        </div>
    )

}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string

}
export default News
