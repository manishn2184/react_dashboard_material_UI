import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/css/ie10-viewport-bug-workaround.css'
import './assets/css/dashboard.css'
import './App.css';
import Header from './components/headerComponent'
import BarchartSidebar from './components/barchartSidebarComponent/BarchartSidebar';
import { Container, Grid } from '@material-ui/core';
import LeftSideList from './components/leftSideListComponent';
import LeftSideListOnClick from './components/leftSideListComponent/onClick/LeftSideListOnClick';

class App extends React.Component {
  content = {}
  constructor(){
    super()
    this.state = {
      response : {},
      loader : false
    }
  }
  
  render() {

    return (<div>
      <Header app={this.state.response} />
      <Container maxWidth="xl" >
        <Grid container spacing={0}>
          <Grid item sm={4} xs={12} >
            <LeftSideList />
          </Grid>
          <Grid id="bar" item sm={8} xs={12} className='main'>
            <div>
              <BarchartSidebar />
            </div>
          </Grid>
          <Grid id="list" style={{ display: 'none' }} item sm={8} xs={12} className='main-white'>
            <div >
              <LeftSideListOnClick />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>)
      }

}
export function changeDisplay() {
  document.querySelector('#bar').style.display = "none";
  document.querySelector('#list').style.display = "block";
}

export function changeIconDisplay() {
  document.querySelector('#bar').style.display = "block";
  document.querySelector('#list').style.display = "none";
}

export function cloudListChange() {
  document.querySelector('#cloud').style.display = "none";
  document.querySelector('#cloudlist').style.display = "block";
  document.querySelector('#btncloudlist').style.background = "#1065FF";
  document.querySelector('#btncloud').style.background = "#171A1F";
}

export function cloudChange() {
  document.querySelector('#cloud').style.display = "block";
  document.querySelector('#cloudlist').style.display = "none";
  document.querySelector('#btncloudlist').style.background = "#171A1F";
  document.querySelector('#btncloud').style.background = "#1065FF";
}
export default App;
