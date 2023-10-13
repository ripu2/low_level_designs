import React, { useContext } from "react";

import { DefaultContext } from "@lld/utilts/types";
import { State } from "../types/state";

export const initialState: State = {
  tiers: [],
  selectedSeats: [],
}

const defaultVal: DefaultContext<State> = {
  state: initialState,
  dispatch: null
};

export const AuditoriumContext = React.createContext(defaultVal);

export function useAuditoriumContext() {
  return useContext(AuditoriumContext);
}