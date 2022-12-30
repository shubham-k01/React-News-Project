import React, { useEffect ,useState } from 'react'
import Newsitems from './Newsitems.js'
import Spinner from './Spinner.js'
import { useParams } from 'react-router-dom'
import InfiniteScroll from  'react-infinite-scroll-component'
import LoadingBar from 'react-top-loading-bar'

export default function News(props){

  const [page, setPage] = useState(1)
  const [articles, setArticles] = useState([])
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)
  const [totalResults, setTotalResults] = useState(0)

  const {st} = useParams();

  useEffect(() => {
    updateNews()
    document.title= `PrimeNews - ${capitalizeFirst(props.category)}`
  },[])

  const capitalizeFirst = (str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const updateNews = async()=>{
    if(st){
      const url = `https://newsapi.org/v2/everything?q=${st}&apiKey=${props.apiKey}`
      // const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d093053d72bc40248998159804e0e67d&category=${props.category}&pageSize=${props.pageSize}&page=${page}`
      setLoading(true)
      setProgress(20)
      let data = await fetch(url)
      setProgress(50)
      let parsedData = await data.json()
      setProgress(70)
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      setProgress(100)
    }
    else{
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}&category=${props.category}&pageSize=${props.pageSize}&page=${page}`
      // const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d093053d72bc40248998159804e0e67d&category=${props.category}&pageSize=${props.pageSize}&page=${page}`
      setLoading(true)
      setProgress(20)
      let data = await fetch(url)
      setProgress(50)
      let parsedData = await data.json()
      setProgress(70)
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      setProgress(100)
    }
  }
  
  const previousClick = async () => {
    // this.setState({page : this.state.page - 1},()=>{
    //   this.updateNews()    
    // });
    await setPage(page - 1)
    updateNews()
    // Note - await or callback is used with setState because setState is asynchronous and if we want to execute some code after the completion of setState so we should use await or callback :)
    console.log('pc: ',page)
  }
  const nextClick = async () => {
    // this.setState({page : this.state.page + 1},()=>{
    //   this.updateNews()
    // });
    await setPage(page + 1)
    updateNews()
    console.log('nc: ', page)
  }

  const fetchData = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}&category=${props.category}&pageSize=${props.pageSize}&page=${page +1}`
    // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d093053d72bc40248998159804e0e67d&category=${props.category}&pageSize=${props.pageSize}&page=${page +1}`
    await setPage(page+1)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)

  }
    return (
      <>

        <LoadingBar color="#f11946" height='3px' progress={progress} onLoaderFinished={() => setProgress(0)} />
        <div className='container my-5'>
        <h1 style={{ margin: 'auto', marginLeft: '32vw' ,marginTop:'75px'}}>{ st?`Top Headlines on ${capitalizeFirst(st)}`:`Top Headlines on ${capitalizeFirst(props.category)}`}</h1>
          {loading && <Spinner />}
          <InfiniteScroll style={{overflow:'hidden'}}
            dataLength={articles.length} //This is important field to render the next data
            next={fetchData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(400px,3fr)', gridGap: '0.5rem' }}> 
            
            {articles.map((item) => {
              return <Newsitems key={item.url} url={item.url} urlToimg={item.urlToImage} source={item.source} author={item.author} title={item.title} desc={item.description} published={(item.publishedAt)} />
            })}
          </div>
          </InfiniteScroll>
        </div>
        {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100px', width: '98vw', marginTop: '25px' }}>
          <button disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.previousClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-primary" onClick={this.nextClick}>Next &rarr;</button>
        </div> */}
        &copy;
      </>

    )
  }
