export type Ticket = {
  UserID : number
  TicketID: number
  BookingCode: string
  Status: string
  TravelCode: string
  DepartureStation : {
    Code: string
    Name: string
    CityCode: string
  }
  DestinationStation : {
    Code: string
    Name: string
    CityCode: string
  }
  DepartureSchedule: string
  ArrivalSchedule: string

}

type Station = {
  code: string
  name: string
  city_code: string
}


type Passenger = {
  passenger_id: number
  passenger_name : string
  passenger_id_type: string
  passenger_id_number: string
  seat_id: number
  seat_label: string
}

export type TicketDetailsData = {
  user_id : number
  ticket_id: number
  booking_code: string
  status : string
  travel_code: string
  departure_station : Station
  destination_station : Station
  departure_schedule: string
  arrival_schedule: string
  duration : {
    hout: number
    minute: number
  }
  passengers : Passenger[]
}

type ticket_detail = {
  "ticket_id": 1,
  "status": "PAID",
  "departure_station": {
      "code": "BD ",
      "name": "Bandung",
      "city_code": ""
  },
  "destination_station": {
      "code": "TG ",
      "name": "Tegal",
      "city_code": ""
  },
  "departure_schedule": "2023-07-07T16:50:00Z",
  "arrival_schedule": "2023-07-07T22:27:00Z",
  "duration": {
      "hour": 5,
      "minute": 37
  },
  "passengers": [
      {
          "passenger_id": 3,
          "passenger_name": "Rizky Ardi Maulana",
          "passenger_id_type": "KTP",
          "passenger_id_number": "337602",
          "seat_id": 1,
          "seat_label": "EKS-1/1A"
      },
      {
          "passenger_id": 4,
          "passenger_name": "Shiva Veronica Aulia",
          "passenger_id_type": "KTP",
          "passenger_id_number": "337601",
          "seat_id": 2,
          "seat_label": "EKS-1/1B"
      },
      {
          "passenger_id": 5,
          "passenger_name": "Najwa Cahya",
          "passenger_id_type": "KTP",
          "passenger_id_number": "337603",
          "seat_id": 3,
          "seat_label": "EKS-1/1C"
      }
  ]
}
