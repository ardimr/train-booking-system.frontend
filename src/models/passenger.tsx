
export type PassengerData = {
  passengerNumber: number
  fullName: string
  identity: {
    type: string
    number: string
  }
  seat: {
    seatId : number | null
    seatLabel: string
  }
}

// export type PassengerSeat = {
//   passengerNumber: number
//   passengerData: PassengerData
//   seat: {
//     seatId : number | null
//     setLabel : string
//   }
// }