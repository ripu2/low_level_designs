import { Row, Rows, Seats, TierData, TiersEnum, seatEnum } from "./types";

const  TiersData: TierData[] = [
  {
    tierType: TiersEnum.Club,
    tierName:  TiersEnum.Club,
    price: 900,
  },
  {
    tierType: TiersEnum.Executive,
    tierName:  TiersEnum.Executive,
    price: 700,
  },
  {
    tierType: TiersEnum.General,
    tierName:  TiersEnum.General,
    price: 500,
  }
] 

const RowsData: Rows[] = [
  {
    rowName: Row.A,
    tiers: TiersEnum.Club
  },
  {
    rowName: Row.B,
    tiers: TiersEnum.Club
  },
  {
    rowName: Row.C,
    tiers: TiersEnum.Executive
  },
  {
    rowName: Row.D,
    tiers: TiersEnum.Executive
  },
  {
    rowName: Row.E,
    tiers: TiersEnum.General
  },
  {
    rowName: Row.F,
    tiers: TiersEnum.General
  }
]

let SeatData: Seats[] = [
  {
    id: 0,
    seatNumber: 1,
    availabilityStatus: seatEnum.Available,
    rowNames: Row.F,
  },
  {
    id: 1,
    seatNumber: 2,
    availabilityStatus: seatEnum.Booked,
    rowNames: Row.F,
  },
  {
    id: 2,
    seatNumber: 3,
    availabilityStatus: seatEnum.Booked,
    rowNames: Row.F,
  },
  {
    id: 3,
    seatNumber: 4,
    availabilityStatus: seatEnum.EmptySlot,
    rowNames: Row.F,
  },
  {
    id: 5,
    seatNumber: 5,
    availabilityStatus: seatEnum.NotAvailable,
    rowNames: Row.F,
  },
  {
    id: 6,
    seatNumber: 1,
    availabilityStatus: seatEnum.Booked,
    rowNames: Row.E,
  },
  {
    id: 7,
    seatNumber: 2,
    availabilityStatus: seatEnum.Booked,
    rowNames: Row.E,
  },
  {
    id: 8,
    seatNumber: 3,
    availabilityStatus: seatEnum.Booked,
    rowNames: Row.E,
  },
  {
    id: 9,
    seatNumber: 4,
    availabilityStatus: seatEnum.EmptySlot,
    rowNames: Row.E,
  },
  {
    id: 10,
    seatNumber: 5,
    availabilityStatus: seatEnum.NotAvailable,
    rowNames: Row.E,
  },
  {
    id: 11,
    seatNumber: 1,
    availabilityStatus: seatEnum.Booked,
    rowNames: Row.D,
  },
  {
    id: 12,
    seatNumber: 2,
    availabilityStatus: seatEnum.Booked,
    rowNames: Row.D,
  },
  {
    id: 13,
    seatNumber: 3,
    availabilityStatus: seatEnum.Booked,
    rowNames: Row.D,
  },
  {
    id: 14,
    seatNumber: 4,
    availabilityStatus: seatEnum.Booked,
    rowNames: Row.D,
  },
  {
    id: 15,
    seatNumber: 5,
    availabilityStatus: seatEnum.Booked,
    rowNames: Row.D,
  },
  {
    id: 16,
    seatNumber: 1,
    availabilityStatus: seatEnum.Available,
    rowNames: Row.C,
  },
  {
    id: 17,
    seatNumber: 2,
    availabilityStatus: seatEnum.Available,
    rowNames: Row.C,
  },
  {
    id: 18,
    seatNumber: 3,
    availabilityStatus: seatEnum.Available,
    rowNames: Row.C,
  },
  {
    id: 19,
    seatNumber: 4,
    availabilityStatus: seatEnum.Available,
    rowNames: Row.C,
  },
  {
    id: 20,
    seatNumber: 5,
    availabilityStatus: seatEnum.NotAvailable,
    rowNames: Row.C,
  },
  {
    id: 21,
    seatNumber: 1,
    availabilityStatus: seatEnum.Available,
    rowNames: Row.B,
  },
  {
    id: 22,
    seatNumber: 2,
    availabilityStatus: seatEnum.Booked,
    rowNames: Row.B,
  },
  {
    id: 23,
    seatNumber: 3,
    availabilityStatus: seatEnum.Booked,
    rowNames: Row.B,
  },
  {
    id: 24,
    seatNumber: 4,
    availabilityStatus: seatEnum.EmptySlot,
    rowNames: Row.B,
  },
  {
    id: 25,
    seatNumber: 5,
    availabilityStatus: seatEnum.NotAvailable,
    rowNames: Row.B,
  },
  {
    id: 26,
    seatNumber: 1,
    availabilityStatus: seatEnum.EmptySlot,
    rowNames: Row.A,
  },
  {
    id: 27,
    seatNumber: 2,
    availabilityStatus: seatEnum.Booked,
    rowNames: Row.A,
  },
  {
    id: 28,
    seatNumber: 3,
    availabilityStatus: seatEnum.Booked,
    rowNames: Row.A,
  },
  {
    id: 29,
    seatNumber: 4,
    availabilityStatus: seatEnum.EmptySlot,
    rowNames: Row.A,
  },
  {
    id: 30,
    seatNumber: 5,
    availabilityStatus: seatEnum.NotAvailable,
    rowNames: Row.A,
  }
]

export const getTiers = () => {
  return new Promise<TierData[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(TiersData);
    }, 2000)
  })
}


export const getRows = (tier: TiersEnum) => {
  return new Promise<Rows[]>((resolve, reject) => {
    setTimeout(() => {
      const availableRows: Rows[] = RowsData.filter((row: Rows) => {
        return row.tiers === tier
      })

      resolve(availableRows);
    }, 2000)
  })
}

export const getSeats = (row: Row) => {
  return new Promise<Seats[]>((resolve, reject) => {
    setTimeout(() => {
      const availableSeats: Seats[] = SeatData.filter((seat: Seats) => {
        return seat.rowNames === row
      })
      resolve(availableSeats);
    }, 2000)
  })
}

const getPriceOfSeat = (id: number) => {
  const selectedSeat = SeatData.filter((data: Seats) => data.id === id)[0];
  const getTier = RowsData.findLast((element: Rows) => element.rowName === selectedSeat.rowNames)?.tiers
  const price = TiersData.findLast((element: TierData) => element.tierType === getTier)

  return price?.price

}

export const calculateTotal = (seatIds: number[]) => {
  let total = 0;
  seatIds.map((seatId: number) => {
    total+= getPriceOfSeat(seatId) || 0
  })

  return total;
}