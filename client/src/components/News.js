import React, { Component } from 'react'
import Newsitems from './Newsitems.js'
import Spinner from './Spinner.js'
import InfiniteScroll from  'react-infinite-scroll-component'
import LoadingBar from 'react-top-loading-bar'

export default class News extends Component {

  constructor(props) {
    super(props)
    this.state = {
      totalResults: 0,
      page: 1,
      loading: false,
      articles: [],
      progress: 0
    }
    document.title= `PrimeNews - ${this.capitalizeFirst(this.props.category)}`
  }
  capitalizeFirst = (str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  async updateNews() {
    console.log('un: ', this.state.page)
    // if (!this.props.search) {
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}`
      this.setState({ loading: true, progress: 20 })
      let data = await fetch(url)
      this.setState({ progress: 50 })
      let parsedData = await data.json()
      this.setState({ progress: 70 })
      this.setState({
        totalResults: parsedData.totalResults,
        loading: false,
        articles: parsedData.articles,
        progress: 100
      })
    // }
    // else {
    //   const url = `https://newsapi.org/v2/everything?q=${this.props.search}&apiKey=${this.props.apiKey}`
    //   this.setState({ loading: true, progress: 20 })
    //   let data = await fetch(url)
    //   this.setState({ progress: 50 })
    //   let parsedData = await data.json()
    //   this.setState({ progress: 70 })
    //   this.setState({
    //     totalResults: parsedData.totalResults,
    //     loading: false,
    //     articles: parsedData.articles,
    //     progress: 100
    //   })
    // }

  }
  async componentDidMount() {
    this.updateNews()
  }
  previousClick = async () => {
    // this.setState({page : this.state.page - 1},()=>{
    //   this.updateNews()    
    // });
    await this.setState({ page: this.state.page - 1 })
    this.updateNews()
    // Note - await or callback is used with setState because setState is asynchronous and if we want to execute some code after the completion of setState so we should use await or callback :)
    console.log('pc: ', this.state.page)
  }
  nextClick = async () => {
    // this.setState({page : this.state.page + 1},()=>{
    //   this.updateNews()
    // });
    await this.setState({ page: this.state.page + 1 })
    this.updateNews()
    console.log('nc: ', this.state.page)
  }

  fetchData = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page +1}`
    await this.setState({page : this.state.page + 1})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      totalResults: parsedData.totalResults,
      articles : this.state.articles.concat(parsedData.articles),
      loading : false
    })

  }
  render() {
    return (
      <>

        <LoadingBar color="#f11946" height='3px' progress={this.state.progress} onLoaderFinished={() => this.setState({ progress: 0 })} />
        <h1 style={{ margin: 'auto', marginLeft: '32vw' ,marginTop:'75px'}}>{`Top Headlines on ${this.capitalizeFirst(this.props.category)} `}</h1>
        <div className='container'>
          {this.state.loading && <Spinner />}
          <InfiniteScroll style={{overflow:'hidden'}}
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(400px,3fr)', gridGap: '0.5rem' }}> 
            
            {this.state.articles.map((item) => {
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
}
