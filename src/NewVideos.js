import React from 'react';
import {bindActionCreators} from 'redux'
import { fetchVideos } from './actions';
import {connect} from 'react-redux'

function NewVideos(props){

  function onSearchVideos(event){
    event.preventDefault()
    var searchTerm = event.target.children[0].value
    props.fetchVideos(searchTerm)
    // debugger
    event.currentTarget[0].value = ''
  }

  return (
    <div className="search-bar">
      <h1>Whadda wanna see?</h1>
        <form onSubmit={onSearchVideos} >
          <input type='text' />
          <input type='submit' value='Search Youtube' />
        </form>
      </div>
  )
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchVideos: fetchVideos}, dispatch)
}

export default connect(null, mapDispatchToProps)(NewVideos)


// import React from 'react'

// export default function SearchVideo(props){

// return(
//   <form className="search-bar" onSubmit={props.submitItemForm}>
//     <p><label className="search-bar">Search For a Video</label> <input type="text" id="term" /></p>
//     <p><input className="search-bar" type="submit" id="submit" name="submit" /> </p>
//   </form>
//   )

// }
