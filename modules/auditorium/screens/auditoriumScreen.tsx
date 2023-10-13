"use client"

import { AuditoriumContext } from '../context'
import Layout from '../components/Layout'
import React from 'react'
import { useReducerAuditorium } from '../context/reducers'

function AuditoriumScreen() {

  const [state, dispatch] = useReducerAuditorium();
  return (
    <React.Fragment>
      <AuditoriumContext.Provider value={{state, dispatch}}>
        <Layout />
      </AuditoriumContext.Provider>
    </React.Fragment>
  )
}

export default AuditoriumScreen