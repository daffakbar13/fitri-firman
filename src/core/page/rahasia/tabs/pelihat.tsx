import 'dayjs/locale/id'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import React from 'react'

import ViewHistoriesService from '@/lib/services/view-histories/view-histories.service'

dayjs.locale('id')
dayjs.extend(relativeTime)

const TabPelihat: React.FC = () => {
  const viewers = ViewHistoriesService.GetViewHistories.useQuery()

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          {viewers.isFetching && (
            <caption>
              <center>Loading...</center>
            </caption>
          )}
          {!viewers.isFetching && !viewers.data?.length && (
            <caption>
              <center>Data Tidak Ditemukan</center>
            </caption>
          )}
          <TableHead>
            <TableRow>
              <TableCell>Nama</TableCell>
              <TableCell>Grup</TableCell>
              <TableCell>Jam</TableCell>
              <TableCell>Hari, Tanggal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {viewers.isSuccess && (
              <>
                {!viewers.isFetching &&
                  viewers.data.map((guest, i) => (
                    <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">
                        {guest.name}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {guest.groupName}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {dayjs(guest.createdAt).format('HH:mm')}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {dayjs(guest.createdAt).format('dddd, DD MMMM YYYY')}
                      </TableCell>
                    </TableRow>
                  ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default TabPelihat
