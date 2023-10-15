import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import ButtonComponent from '../button';
import { CarousalData } from '../../types';
import ImageComponent from '../imageComponent';
import { current } from '@reduxjs/toolkit';
import { useCarousal } from '../../hooks'

function CarousalComponent() {
  const [carousalImageData, setCarousalImageData] = useState<CarousalData[]>([])
  const [activeCarousalIndex, setActiveCarousalIndex] = useState<number>(0);

  const [allowAutoPlay, setAutoPlay] = useState<boolean>(false); 


  const { getCarousals } = useCarousal();

  const fetchCarousalImageData = useCallback(() => {
    const data = getCarousals();
    setCarousalImageData(data);
  }, [getCarousals])

  useEffect(() => {
    fetchCarousalImageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onNextClick = useCallback(() => {
    setActiveCarousalIndex(activeCarousalIndex + 1)
  }, [activeCarousalIndex])

  const onPrevClick = useCallback(() => {
    setActiveCarousalIndex(activeCarousalIndex - 1)
  }, [activeCarousalIndex])


  const initiateAutoSlide = useCallback(() => {
      setAutoPlay(!allowAutoPlay)
  }, [allowAutoPlay]);

  useEffect(() => {
    if(allowAutoPlay) {
      if(activeCarousalIndex < carousalImageData.length-1) {
        setTimeout(() => {
          setActiveCarousalIndex(activeCarousalIndex + 1)
        }, 1000)
      } else {
        setTimeout(() => {
          setActiveCarousalIndex(0)
        }, 1000)
      }
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allowAutoPlay, activeCarousalIndex])

  const renderPagination = useMemo(() => {
    return carousalImageData.map((data: CarousalData ,index: number) => {
      return <div style={{height: 20, width: 20, border: '1px solid white', marginRight: 20, borderRadius: 10, marginBottom: 20, backgroundColor: activeCarousalIndex === index ? 'wheat' : 'transparent'}} key={index} />
    })
  }, [activeCarousalIndex, carousalImageData])

  const renderCarousal = useMemo(() => {
    const activeImage = carousalImageData[activeCarousalIndex]

    return <div style={{ width: '40%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
      <ImageComponent imageUrl={activeImage?.imageUrl} description={activeImage?.description} />
      <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
        {renderPagination}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ButtonComponent title='Previous' onClick={onPrevClick} disabled={activeCarousalIndex === 0 || allowAutoPlay} />
        <ButtonComponent title='Next' onClick={onNextClick} disabled={activeCarousalIndex === carousalImageData.length-1 || allowAutoPlay} />
        <ButtonComponent title={allowAutoPlay? 'Stop' : 'Auto'} onClick={initiateAutoSlide} disabled={false} />

      </div>
    </div>
  }, [activeCarousalIndex, allowAutoPlay, carousalImageData, initiateAutoSlide, onNextClick, onPrevClick, renderPagination])

  return (
    renderCarousal
  )
}

export default React.memo(CarousalComponent)