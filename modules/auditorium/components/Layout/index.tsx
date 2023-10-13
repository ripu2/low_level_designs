"use client"

import React, { useEffect } from 'react'

import Tiers from '../Tiers';
import { useAuditoriumContext } from '../../context';
import { useLayoutManager } from '../../hooks'

function Layouts() {
  const {state, dispatch} = useAuditoriumContext();
  const {getLayouts} = useLayoutManager(dispatch);


  useEffect(() => {
    getLayouts()
  }, [])

  return (
    <Tiers />
  )
}

export default React.memo(Layouts)