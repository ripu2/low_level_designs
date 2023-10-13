import React, { useCallback, useMemo } from 'react'

interface StarComponentProps {
  isSelected: boolean;
  onPress: () => void;
}

function StarComponent(props: StarComponentProps) {
  const {isSelected, onPress} = props;

  const getStarColor = useMemo(() => {
    if(isSelected) return 'yellow';
    return 'white';
  }, [isSelected])

  return (
    <div style={{color: getStarColor, cursor: 'pointer', fontSize: '10em'}} onClick={onPress}>&#9733;</div>
  )
}

export default React.memo(StarComponent)