import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigContainer from './PigContainer';

class App extends Component {

  state={
    filtered: false,
    sortByName: false,
    sortByWeight: false,
    searchTerm: ""
  }

  handleInput = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  filterHandler = ()=>{
    this.setState({
      filtered: !this.state.filtered
    })
  }
  nameSorterHandler = () => {
    this.setState({
      sortByName: !this.state.sortByName
    })
  }

  sortByWeightHandler = () => {
    this.setState({
      sortByWeight: !this.state.sortByWeight
    })
  }

  searchHogs = ()=>{filtered.filter((hog) => {
    return hog.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
  })}

  renderHogs = ()=>{
    let filtered = hogs.filter((hog) => {return hog.greased})

    if(this.state.filtered && this.state.sortByName){
      return [...filtered].sort((hog1, hog2) => {
        if (hog1.name > hog2.name){
          return 1
        } else if (hog1.name < hog2.name){
          return -1
        } else {
          return 0
        }
      })
    } else if(!this.state.filtered && this.state.sortByName){
      return [...hogs].sort((hog1, hog2) => {
        if (hog1.name > hog2.name){
          return 1
        } else if (hog1.name < hog2.name){
          return -1
        } else {
          return 0
        }
      })
    } else if(this.state.filtered){
      return filtered
     } else if (this.state.filtered && this.state.sortByWeight){
      return [...filtered].sort((hog1, hog2) => {
        if (hog1.weight > hog2.weight){
          return 1
        } else if (hog1.weight < hog2.weight){
          return -1
        } else {
          return 0
        }
      })
    } else if(!this.state.filtered && this.state.sortByWeight){
      return [...hogs].sort((hog1, hog2) => {
        if (hog1.weight > hog2.weight){
          return 1
        } else if (hog1.weight < hog2.weight){
          return -1
        } else {
          return 0
        }
      })
    } else if(this.state.filtered){
      return filtered
     }else {
      return hogs
    }
  }



  render() {
    console.log(this.state.searchTerm)
    return (
      <div className="App">
          < Nav sortByWeightHandler={this.sortByWeightHandler} nameSorterHandler={this.nameSorterHandler} filtered={this.state.filtered} filterHandler={this.filterHandler} handleInput={this.handleInput}/>
          < PigContainer sortByWeight={this.state.sortByWeight} allHogs={this.renderHogs()} />

      </div>
    )
  }
}

export default App;
