import React from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from 'dayjs';

interface props {
    value:Dayjs | null
    setValue:React.Dispatch<React.SetStateAction<Dayjs | null>>
}
const CustomDatePicker: React.FC<props> = (
    { value, setValue }
) => {
    // const onChangeHandler = 
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker format='DD/MM/YYYY' value={value} onChange={(newValue) => {
        setValue(newValue)
    }} />
    </LocalizationProvider>
  )
}

export default CustomDatePicker