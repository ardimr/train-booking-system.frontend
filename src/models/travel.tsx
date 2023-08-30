
export type TravelData = {
  travel_id: number
  travel_code:number
  train_code: string
  train_name: string
  wagon_class : {
    wagon_class_code : string
    wagon_class_name : string
  }
  departure_station: {
    code : string
    name : string
  }
  destination_station: {
    code : string
    name : string
  }
  departure_schedule: string
  arrival_schedule: string
  duration: {
    hour: number
    minute: number
  }
  cost: {
    currency: string
    amount: number
  }
  available_seats: number
}

export const travels:TravelData[] = [
  {
      "travel_id": 1,
      "travel_code": 144,
      "train_code": "CIR",
      "train_name": "Ciremai",
      "wagon_class": {
          "wagon_class_code": "EKS",
          "wagon_class_name": "Excecutive"
      },
      "departure_station": {
          "code": "BD ",
          "name": "Bandung"
      },
      "destination_station": {
          "code": "TG ",
          "name": "Tegal"
      },
      "departure_schedule": "2023-07-07T16:50:00Z",
      "arrival_schedule": "2023-07-07T22:27:00Z",
      "duration": {
          "hour": 5,
          "minute": 37
      },
      "cost": {
          "currency": "IDR",
          "amount": 100000
      },
      "available_seats": 9
  },
  {
      "travel_id": 1,
      "travel_code": 144,
      "train_code": "CIR",
      "train_name": "Ciremai",
      "wagon_class": {
          "wagon_class_code": "EKO",
          "wagon_class_name": "Economy"
      },
      "departure_station": {
          "code": "BD ",
          "name": "Bandung"
      },
      "destination_station": {
          "code": "TG ",
          "name": "Tegal"
      },
      "departure_schedule": "2023-07-07T16:50:00Z",
      "arrival_schedule": "2023-07-07T22:27:00Z",
      "duration": {
          "hour": 5,
          "minute": 37
      },
      "cost": {
          "currency": "IDR",
          "amount": 80000
      },
      "available_seats": 6
  },
  {
      "travel_id": 3,
      "travel_code": 126,
      "train_code": "HAR",
      "train_name": "Harina",
      "wagon_class": {
          "wagon_class_code": "EKS",
          "wagon_class_name": "Excecutive"
      },
      "departure_station": {
          "code": "BD ",
          "name": "Bandung"
      },
      "destination_station": {
          "code": "TG ",
          "name": "Tegal"
      },
      "departure_schedule": "2023-07-07T20:25:00Z",
      "arrival_schedule": "2023-07-08T01:32:00Z",
      "duration": {
          "hour": 5,
          "minute": 7
      },
      "cost": {
          "currency": "IDR",
          "amount": 150000
      },
      "available_seats": 8
  },
  {
      "travel_id": 3,
      "travel_code": 126,
      "train_code": "HAR",
      "train_name": "Harina",
      "wagon_class": {
          "wagon_class_code": "EKO",
          "wagon_class_name": "Economy"
      },
      "departure_station": {
          "code": "BD ",
          "name": "Bandung"
      },
      "destination_station": {
          "code": "TG ",
          "name": "Tegal"
      },
      "departure_schedule": "2023-07-07T20:25:00Z",
      "arrival_schedule": "2023-07-08T01:32:00Z",
      "duration": {
          "hour": 5,
          "minute": 7
      },
      "cost": {
          "currency": "IDR",
          "amount": 100000
      },
      "available_seats": 8
  }
]