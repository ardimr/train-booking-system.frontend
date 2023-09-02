import { fetchTravels } from "@/api/travels"
import { SearchFormInput } from "@/components/SearchTickets/SearchTickets"
import { useQuery, useQueryClient } from "react-query"


export const useTravels = (form:SearchFormInput) => {
  return useQuery({
    queryKey: ['travels', form],
    queryFn: () => fetchTravels(form),
    enabled: true,
    refetchOnWindowFocus: false,

  })
    
}



// export const useTravels = () => {
//   return useQuery(
//     "travels",
//     fetchTravels(),
//     {
//       enabled: false
//     }
//   )
    
// }