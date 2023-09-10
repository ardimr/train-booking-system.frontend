
export type NewBookingData = {
  travel_id: number,
  contact_details: {
    full_name: string,
    phone_number: {
      country_code: string,
      number: string
    },
    email: string,
  },
  passenger_details : passengerDetail[]
}

type passengerDetail  = {
  passenger_name: string,
  passenger_id_type: string,
  passenger_id_number: string,
  seat_id: number | null
}