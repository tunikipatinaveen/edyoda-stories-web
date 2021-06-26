import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Components/navbar';
import styles from './App.module.css'
import Card from './Components/card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [],
      loading: true,
      filterIndex: null,
      blogs: []
    }
  }


  componentDidMount() {
    axios.get('https://60b6386d8ac0790017829a00.mockapi.io/edyodaStoriesFilter')
      .then(resp => this.setState({ filters: resp.data, loading: false }))
      .catch(err => {
        console.log(err)
      })
    axios.get('https://60b6386d8ac0790017829a00.mockapi.io/edyodaStoriesBlogs')
      .then(resp => this.setState({ blogs: resp.data }))
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (<div style={{ backgroundColor: '#f2f6ff', padding: '2% 16%', minHeight: '100vh' }}>
      <Navbar filters={this.state.filters} />
      <div className={styles['content-area']}>
        <h3 className={styles.heading}>Latest Posts</h3>
        <div className={styles.categoryHeading}>
          <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII=' />
          <p>Filter by Category</p>
        </div>
        {this.state.loading ? <h1>Loading.....</h1> : ''}
        {this.state.filters.map((item) => <button className={this.state.filterIndex === item.id ? styles.activeFilter : styles.filterBtn} onClick={() => this.setState({ filterIndex: item.id })}>{item.title}</button>)}

        <div className={styles['blogs-container']}>
          {this.state.blogs.map((item) => <Card card={item} />)}
        </div>
      </div>
    </div>);
  }
}

export default App;
