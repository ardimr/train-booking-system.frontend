export type Ticket = {
  UserID : number
  TicketID: number
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