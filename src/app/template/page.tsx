"use client"

import PrimaryButton from '@/components/Button/primary_button'
import DropdownList from '@/components/Dropdown/DropdownStations'
import { DataModel } from '@/components/Dropdown/Model'
import Input from '@/components/Input/input'
import SearchStations from '@/components/SearchStations/SearchStations'
import { Dayjs } from 'dayjs'
import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import CustomDatePicker from '@/components/DatePicker/DatePicker' 

export default function Template() {

  const queryQlient = new QueryClient()
  const [value, setValue] = React.useState<Dayjs | null>(null);
  console.log(value?.format("DD/MM/YYYY"))
  return (
    <div>
        <div style={{padding: "1% 1%"}}>
            This Is Primary Submit
            
            <span style={{padding: "1% 1%"}}> 
                <PrimaryButton disabled= {false} children='Search Trains'/>
            </span>
            <span style={{padding: "1% 1%"}}>
                <PrimaryButton disabled = {true} children='Search Trains'/>
            </span>
        </div>

        <div>
            <QueryClientProvider client={queryQlient}>
              This is StationList
              <SearchStations />
            </QueryClientProvider>
        </div>
        <div style={{position:'relative', top: '10px'}}>
          <CustomDatePicker value={value} setValue={setValue}  />
        </div> 
    </div>
  )
}
