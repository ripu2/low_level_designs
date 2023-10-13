import { ParentContainer, RowContainer, RowNameTypography } from './styles';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Rows, TiersEnum } from '@lld/utilts/types';

import Seats from '../seats';
import { useAuditoriumContext } from '../../context';
import { useLayoutManager } from '../../hooks';

interface SeatRowProps {
  tier: TiersEnum
}

function SeatRows(props: SeatRowProps) {
  const { tier } = props;

  const [rowData, setRowData] = useState<Rows[]>([])
  const { getRowsData } = useLayoutManager(null);

  const fetchRows = useCallback(async () => {
    const res: Rows[] = await getRowsData(tier) || [];
    setRowData(res);
  }, [getRowsData, tier])

  useEffect(() => {
    fetchRows();
  }, [])

  const renderRows = useMemo(() => {
    return rowData.map((row: Rows, index: number) => {
      return <RowContainer key={index}>
        <RowNameTypography >
          {row.rowName}
        </RowNameTypography>
        <Seats rowNames={row.rowName} />
      </RowContainer>
    })
  }, [rowData])

  return (
    <ParentContainer>
      {renderRows}
    </ParentContainer>
  )
}

export default React.memo(SeatRows)