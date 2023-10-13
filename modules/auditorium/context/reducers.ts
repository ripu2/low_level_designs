import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { State } from "../types/state";
import { TierData } from "@lld/utilts/types";
import { initialState } from ".";
import { useReducer } from "react";

// Redux and reducers
const reducer = {
  setTiers: function(
    state: State,
    action: PayloadAction<TierData[]>
  ) {
    state.tiers = action.payload
  },
  setSelectedSeats: function(
    state: State,
    action: PayloadAction<number>
  ) {
    let selectedSeats = state.selectedSeats;
    if(selectedSeats?.includes(action.payload)) {
      selectedSeats = selectedSeats.filter((seat: number) => seat !== action.payload)
    } else {
      selectedSeats = [...selectedSeats, action.payload]
    }

    state.selectedSeats = selectedSeats
  },
}

const slice = createSlice({
  initialState,
  name: "AuditoriumSlice",
  reducers: reducer
});

export function useReducerAuditorium() {
  const reducerInfo = useReducer(slice.reducer, initialState);
  return reducerInfo;
}

export const auditoriumActions = slice.actions;
const AuditoriumReducer = slice.reducer
export default AuditoriumReducer