import React, { useCallback, useMemo, useState } from 'react'

import StarComponent from '../components/starComponent';

function StarPage() {
  const maxStarCount = useMemo(() => {
    return [1,2,3,4,5];
  }, [])
  const [selectedStar, setSelectedStar] = useState<number []>([])


  const isStarSelected = useCallback((id: number) => {
    return selectedStar.includes(id)
  }, [selectedStar])

  const selectStar = useCallback((id: number) => {
    const currentStar = selectedStar.length+1;
    if(isStarSelected(id)) setSelectedStar(selectedStar.slice(0, -1));
    else setSelectedStar([...selectedStar, currentStar]);
  }, [isStarSelected, selectedStar])

  const renderStars = useMemo(() => {
   return maxStarCount.map((val: number, index: number) => {
    return <StarComponent isSelected={isStarSelected(val)} onPress={() => selectStar(val)}  key={index} />
  })
  }, [isStarSelected, maxStarCount, selectStar]);

  return (
    <div style={{display: 'flex'}}>{renderStars}</div>
  )
}

export default StarPage