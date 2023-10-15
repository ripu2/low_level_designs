import { carousalData } from "../utils/data";
import { useCallback } from "react";

export function useCarousal(){
  const getCarousals = useCallback(() => {
    return carousalData
  }, [])
  return {getCarousals}
}