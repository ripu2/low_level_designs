import { ParentContainer, SeatContainer } from './styles';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Row, seatEnum } from '@lld/utilts/types';

import { auditoriumActions } from '../../context/reducers';
import { useAuditoriumContext } from '../../context';
import { useLayoutManager } from '../../hooks';

interface SeatProps {
  rowNames: Row
}
function Seats(props: SeatProps) {
  const {rowNames} = props;
  const {state, dispatch} = useAuditoriumContext();

  const [seats, setSeats] = useState<Seats[]>([])

  const {getSeatsData} = useLayoutManager(null)

  const fetchSeats = useCallback(async () => {
    const res = await getSeatsData(rowNames) || [];
    setSeats(res)
  }, [getSeatsData, rowNames])


  useEffect(() => {
    fetchSeats()
  }, [])

  const getBackgroundColor = useCallback((bookingStatus: seatEnum, id: number) => {
    if(state.selectedSeats.includes(id)) return 'green'
    else {
      switch(bookingStatus) {
        case seatEnum.Available: return 'white';
        case seatEnum.Booked: return 'grey';
        case seatEnum.NotAvailable: return 'red';
        default: return 'white'
      }
    }
  }, [state.selectedSeats])



  const selectSeat = useCallback((seatId: number, seatStatus: seatEnum) => {
    if(dispatch && (seatStatus === seatEnum.Available || state.selectedSeats.includes(seatId))) dispatch(auditoriumActions.setSelectedSeats(seatId))
  }, [dispatch, state.selectedSeats])

  const renderSeats = useMemo(() => {
    return seats.map((seat: Seats, index: number) => {
      return <SeatContainer onClick={() => {
        selectSeat(seat.id, seat.availabilityStatus)
      }} key={index} style={{visibility: seat.availabilityStatus === seatEnum.EmptySlot? 'hidden' : 'initial', backgroundColor: getBackgroundColor(seat.availabilityStatus, seat.id)}}>
        <h1 >{seat.seatNumber}</h1>
      </SeatContainer>
    })
  }, [getBackgroundColor, seats, selectSeat])

  return (
    <ParentContainer>
      {renderSeats}
    </ParentContainer>
  )
}

export default React.memo(Seats)