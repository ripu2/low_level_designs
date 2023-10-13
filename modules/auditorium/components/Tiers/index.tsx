import { HeaderContainer, HeaderTypography } from './styles';
import React, { useMemo } from 'react'

import SeatRows from '../seatRows';
import { TierData } from '@lld/utilts/types';
import { useAuditoriumContext } from '../../context'

function Tiers() {
  const { state } = useAuditoriumContext();
  const availableTiers = state.tiers

  const renderTiers = useMemo(() => {
    return availableTiers.map((tier: TierData, index: number) => {
      return (
        <HeaderContainer key={index}>
          <HeaderTypography>
            {tier.tierName} - Rs.{tier.price}
          </HeaderTypography>
          <SeatRows tier={tier.tierType} /> 
        </HeaderContainer>
      )
    })
  }, [availableTiers])

  return (
    <div style={{ justifyContent: 'center' }}>
      {renderTiers}
    </div>
  )
}

export default React.memo(Tiers)