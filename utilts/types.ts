import { Dispatch } from "react";

export enum TiersEnum {
  Club = 'Club',
  Executive = 'Executive',
  General = 'General',
}

export enum seatEnum{
  Available = 'Available',
  Booked = 'Booked',
  NotAvailable = 'Not Available',
  EmptySlot = 'EmptySlot',
}

export enum Row{
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
}

export interface Seats {
  id: number;
  seatNumber: number;
  availabilityStatus: seatEnum,
  rowNames: Row;
}

export interface Rows {
  rowName: Row;
  tiers: TiersEnum;
}

export interface TierData{
  tierType: TiersEnum,
  tierName: TiersEnum,
  price: number,
}

export interface DefaultContext<T> {
  state: T;
  dispatch: null | Dispatch<any>;
}
