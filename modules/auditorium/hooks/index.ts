import { Dispatch, useState } from "react";
import { Row, Rows, Seats, TierData, TiersEnum } from "@lld/utilts/types";
import { getRows, getSeats, getTiers } from "@lld/utilts";

import { auditoriumActions } from "../context/reducers";

export function useLayoutManager(dispatch:  Dispatch<any> | null) {
  const [loadingLayout, setLadingLayout] = useState<boolean>(false);

  const getLayouts = async() => {
    try {
      setLadingLayout(true)
      const response: TierData[] = await getTiers();
      if(response && dispatch) {
       dispatch(auditoriumActions.setTiers(response))
      }
    } catch (error) {
      
    } finally{
      setLadingLayout(false)
    }
  }



  const getRowsData = async(tier: TiersEnum) => {
    try {
      setLadingLayout(true)
      const response: Rows[]= await getRows(tier);
      if(response) {
       return response;
      }
    } catch (error) {
      
    } finally{
      setLadingLayout(false)
    }
  }

  const getSeatsData = async(row: Row) => {
    try {
      setLadingLayout(true)
      const response: Seats[]= await getSeats(row);
      if(response) {
       return response;
      }
    } catch (error) {
      
    } finally{
      setLadingLayout(false)
    }
  }


  return {getLayouts, getSeatsData, getRowsData};
}