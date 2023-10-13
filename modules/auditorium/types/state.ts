import { TierData } from "@lld/utilts/types";

export interface State {
  tiers: TierData[],
  selectedSeats: number[]
}