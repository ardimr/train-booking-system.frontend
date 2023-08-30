import React from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs';
import { SxProps } from '@mui/material';

interface props {
    value:Dayjs | null
    setValue:React.Dispatch<React.SetStateAction<Dayjs | null>>
} 
const CustomDatePicker: React.FC<props> = (
    { value, setValue }
) => {
    // const onChangeHandler = 
  const dateSx: SxProps = {
  "& .MuiInputBase-root" : {
    // height:"100%",
    alignSelf:"center",
    "& .MuiInputBase-input" : {
      padding: "8px 12px"
    }
    },
 
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          sx={dateSx}
          format='DD/MM/YYYY'
          value={value} 
          minDate={dayjs()}
          maxDate={dayjs().add(1, 'week')}
          onChange={(newValue) => {
        setValue(newValue)
    }} />
    </LocalizationProvider>
  )
}

export default CustomDatePicker