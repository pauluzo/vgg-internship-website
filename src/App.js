import React, { useEffect, useState } from 'react';
import './App.css';
import Router from './Router';
import { BrowserRouter as Route } from 'react-router-dom';
import axios from 'axios'
import {connect} from 'react-redux'

function App(props) {
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    axios.get('https://vgg-internship-db.herokuapp.com/api/content')
    .then(res => {
      props.updateStore(res.data)
      setLoading(false)
    })
  },[props])

  if (loading){
    return <div className="loader">Loading...</div>
  }

  return (
    <Route>
      <Router />
    </Route>
  );
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
  return {
    updateStore: (content) => {
      dispatch({
        type: "UPDATE_STATE",
        data: content
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
