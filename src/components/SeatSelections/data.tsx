
export type RowElement = {
  seat_id: number
  seat_row: number
  seat_column: string
  seat_label: string
  available: boolean
}

export type SeatRowData = {
  row_elements : RowElement[]
}

export type PassengerData = {
  name: string
}

export const passengers:PassengerData[] = [
  {name:"Rizky Ardi Maulana"},
  {name:"Maulana Rizky Ardi"}
]

export type PassengerSeat = {
  passengerNumber: number
  passengerData: PassengerData
  seat: {
    seatId : number | null
    setLabel : string
  }
}

// export const initialPassengerSeats: PassengerSeat[] = [
//     {
//         passengerNumber:1,
//         passengerData: {name:"Rizky Ardi Maulana"},
//         seat: null
//     },
//     {
//         passengerNumber:2,
//         passengerData: {name:"Shiva Veronica Aulia"},
//         seat: null
//     }
// ]

export const seatRows:SeatRowData[] = [
    {
        "row_elements": [
            {
                "seat_id": 1,
                "seat_row": 1,
                "seat_column": "A",
                "seat_label": "EKS1-1A",
                "available": false
            },
            {
                "seat_id": 4,
                "seat_row": 1,
                "seat_column": "D",
                "seat_label": "EKS1-1D",
                "available": true
            },
            {
                "seat_id": 3,
                "seat_row": 1,
                "seat_column": "C",
                "seat_label": "EKS1-1C",
                "available": false
            },
            {
                "seat_id": 2,
                "seat_row": 1,
                "seat_column": "B",
                "seat_label": "EKS1-1B",
                "available": false
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_id": 5,
                "seat_row": 2,
                "seat_column": "C",
                "seat_label": "EKS1-2C",
                "available": true
            },
            {
                "seat_id": 6,
                "seat_row": 2,
                "seat_column": "B",
                "seat_label": "EKS1-2B",
                "available": true
            },
            {
                "seat_id": 7,
                "seat_row": 2,
                "seat_column": "D",
                "seat_label": "EKS1-2D",
                "available": true
            },
            {
                "seat_id": 8,
                "seat_row": 2,
                "seat_column": "A",
                "seat_label": "EKS1-2A",
                "available": true
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_id": 9,
                "seat_row": 3,
                "seat_column": "C",
                "seat_label": "EKS1-2C",
                "available": true
            },
            {
                "seat_id": 10,
                "seat_row": 3,
                "seat_column": "B",
                "seat_label": "EKS1-2B",
                "available": true
            },
            {
                "seat_id": 11,
                "seat_row": 3,
                "seat_column": "D",
                "seat_label": "EKS1-2D",
                "available": true
            },
            {
                "seat_id": 12,
                "seat_row": 3,
                "seat_column": "A",
                "seat_label": "EKS1-2A",
                "available": true
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_id": 13,
                "seat_row": 2,
                "seat_column": "C",
                "seat_label": "EKS1-2C",
                "available": true
            },
            {
                "seat_id": 14,
                "seat_row": 2,
                "seat_column": "B",
                "seat_label": "EKS1-2B",
                "available": true
            },
            {
                "seat_id": 15,
                "seat_row": 2,
                "seat_column": "D",
                "seat_label": "EKS1-2D",
                "available": true
            },
            {
                "seat_id":16,
                "seat_row": 2,
                "seat_column": "A",
                "seat_label": "EKS1-2A",
                "available": true
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_id": 17,
                "seat_row": 2,
                "seat_column": "C",
                "seat_label": "EKS1-2C",
                "available": true
            },
            {
                "seat_id": 18,
                "seat_row": 3,
                "seat_column": "B",
                "seat_label": "EKS1-2B",
                "available": true
            },
            {
                "seat_id": 19,
                "seat_row": 3,
                "seat_column": "D",
                "seat_label": "EKS1-2D",
                "available": true
            },
            {
                "seat_id": 20,
                "seat_row": 3,
                "seat_column": "A",
                "seat_label": "EKS1-2A",
                "available": true
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_id": 21,
                "seat_row": 1,
                "seat_column": "A",
                "seat_label": "EKS1-1A",
                "available": false
            },
            {
                "seat_id": 22,
                "seat_row": 1,
                "seat_column": "D",
                "seat_label": "EKS1-1D",
                "available": true
            },
            {
                "seat_id": 23,
                "seat_row": 1,
                "seat_column": "C",
                "seat_label": "EKS1-1C",
                "available": false
            },
            {
                "seat_id": 24,
                "seat_row": 1,
                "seat_column": "B",
                "seat_label": "EKS1-1B",
                "available": false
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_id": 25,
                "seat_row": 2,
                "seat_column": "C",
                "seat_label": "EKS1-2C",
                "available": true
            },
            {
                "seat_id": 26,
                "seat_row": 2,
                "seat_column": "B",
                "seat_label": "EKS1-2B",
                "available": true
            },
            {
                "seat_id": 27,
                "seat_row": 2,
                "seat_column": "D",
                "seat_label": "EKS1-2D",
                "available": true
            },
            {
                "seat_id": 28,
                "seat_row": 2,
                "seat_column": "A",
                "seat_label": "EKS1-2A",
                "available": true
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_id": 29,
                "seat_row": 3,
                "seat_column": "C",
                "seat_label": "EKS1-2C",
                "available": true
            },
            {
                "seat_id": 30,
                "seat_row": 3,
                "seat_column": "B",
                "seat_label": "EKS1-2B",
                "available": true
            },
            {
                "seat_id": 31,
                "seat_row": 3,
                "seat_column": "D",
                "seat_label": "EKS1-2D",
                "available": true
            },
            {
                "seat_id": 32,
                "seat_row": 3,
                "seat_column": "A",
                "seat_label": "EKS1-2A",
                "available": true
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_id": 33,
                "seat_row": 2,
                "seat_column": "C",
                "seat_label": "EKS1-2C",
                "available": true
            },
            {
                "seat_id": 34,
                "seat_row": 2,
                "seat_column": "B",
                "seat_label": "EKS1-2B",
                "available": true
            },
            {
                "seat_id": 35,
                "seat_row": 2,
                "seat_column": "D",
                "seat_label": "EKS1-2D",
                "available": true
            },
            {
                "seat_id": 36,
                "seat_row": 2,
                "seat_column": "A",
                "seat_label": "EKS1-2A",
                "available": true
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_id": 37,
                "seat_row": 2,
                "seat_column": "C",
                "seat_label": "EKS1-2C",
                "available": true
            },
            {
                "seat_id": 38,
                "seat_row": 3,
                "seat_column": "B",
                "seat_label": "EKS1-2B",
                "available": true
            },
            {
                "seat_id": 39,
                "seat_row": 3,
                "seat_column": "D",
                "seat_label": "EKS1-2D",
                "available": true
            },
            {
                "seat_id": 40,
                "seat_row": 3,
                "seat_column": "A",
                "seat_label": "EKS1-2A",
                "available": true
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_id": 41,
                "seat_row": 1,
                "seat_column": "A",
                "seat_label": "EKS1-1A",
                "available": false
            },
            {
                "seat_id": 42,
                "seat_row": 1,
                "seat_column": "D",
                "seat_label": "EKS1-1D",
                "available": true
            },
            {
                "seat_id": 43,
                "seat_row": 1,
                "seat_column": "C",
                "seat_label": "EKS1-1C",
                "available": false
            },
            {
                "seat_id": 44,
                "seat_row": 1,
                "seat_column": "B",
                "seat_label": "EKS1-1B",
                "available": false
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_id": 45,
                "seat_row": 2,
                "seat_column": "C",
                "seat_label": "EKS1-2C",
                "available": true
            },
            {
                "seat_id": 46,
                "seat_row": 2,
                "seat_column": "B",
                "seat_label": "EKS1-2B",
                "available": true
            },
            {
                "seat_id": 47,
                "seat_row": 2,
                "seat_column": "D",
                "seat_label": "EKS1-2D",
                "available": true
            },
            {
                "seat_id": 48,
                "seat_row": 2,
                "seat_column": "A",
                "seat_label": "EKS1-2A",
                "available": true
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_id": 49,
                "seat_row": 3,
                "seat_column": "C",
                "seat_label": "EKS1-2C",
                "available": true
            },
            {
                "seat_id": 50,
                "seat_row": 3,
                "seat_column": "B",
                "seat_label": "EKS1-2B",
                "available": true
            },
            {
                "seat_id": 51,
                "seat_row": 3,
                "seat_column": "D",
                "seat_label": "EKS1-2D",
                "available": true
            },
            {
                "seat_id": 52,
                "seat_row": 3,
                "seat_column": "A",
                "seat_label": "EKS1-2A",
                "available": true
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_id": 53,
                "seat_row": 2,
                "seat_column": "C",
                "seat_label": "EKS1-2C",
                "available": true
            },
            {
                "seat_id": 54,
                "seat_row": 2,
                "seat_column": "B",
                "seat_label": "EKS1-2B",
                "available": true
            },
            {
                "seat_id": 55,
                "seat_row": 2,
                "seat_column": "D",
                "seat_label": "EKS1-2D",
                "available": true
            },
            {
                "seat_id": 56,
                "seat_row": 2,
                "seat_column": "A",
                "seat_label": "EKS1-2A",
                "available": true
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_id": 57,
                "seat_row": 2,
                "seat_column": "C",
                "seat_label": "EKS1-2C",
                "available": true
            },
            {
                "seat_id": 58,
                "seat_row": 3,
                "seat_column": "B",
                "seat_label": "EKS1-2B",
                "available": true
            },
            {
                "seat_id": 59,
                "seat_row": 3,
                "seat_column": "D",
                "seat_label": "EKS1-2D",
                "available": true
            },
            {
                "seat_id": 60,
                "seat_row": 3,
                "seat_column": "A",
                "seat_label": "EKS1-2A",
                "available": true
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_id": 57,
                "seat_row": 2,
                "seat_column": "C",
                "seat_label": "EKS1-2C",
                "available": true
            },
            {
                "seat_id": 58,
                "seat_row": 3,
                "seat_column": "B",
                "seat_label": "EKS1-2B",
                "available": true
            },
            {
                "seat_id": 59,
                "seat_row": 3,
                "seat_column": "D",
                "seat_label": "EKS1-2D",
                "available": true
            },
            {
                "seat_id": 60,
                "seat_row": 3,
                "seat_column": "A",
                "seat_label": "EKS1-2A",
                "available": true
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_id": 57,
                "seat_row": 2,
                "seat_column": "C",
                "seat_label": "EKS1-2C",
                "available": true
            },
            {
                "seat_id": 58,
                "seat_row": 3,
                "seat_column": "B",
                "seat_label": "EKS1-2B",
                "available": true
            },
            {
                "seat_id": 59,
                "seat_row": 3,
                "seat_column": "D",
                "seat_label": "EKS1-2D",
                "available": true
            },
            {
                "seat_id": 60,
                "seat_row": 3,
                "seat_column": "A",
                "seat_label": "EKS1-2A",
                "available": true
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_id": 57,
                "seat_row": 2,
                "seat_column": "C",
                "seat_label": "EKS1-2C",
                "available": true
            },
            {
                "seat_id": 58,
                "seat_row": 3,
                "seat_column": "B",
                "seat_label": "EKS1-2B",
                "available": true
            },
            {
                "seat_id": 59,
                "seat_row": 3,
                "seat_column": "D",
                "seat_label": "EKS1-2D",
                "available": true
            },
            {
                "seat_id": 60,
                "seat_row": 3,
                "seat_column": "A",
                "seat_label": "EKS1-2A",
                "available": true
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_id": 57,
                "seat_row": 2,
                "seat_column": "C",
                "seat_label": "EKS1-2C",
                "available": true
            },
            {
                "seat_id": 58,
                "seat_row": 3,
                "seat_column": "B",
                "seat_label": "EKS1-2B",
                "available": true
            },
            {
                "seat_id": 59,
                "seat_row": 3,
                "seat_column": "D",
                "seat_label": "EKS1-2D",
                "available": true
            },
            {
                "seat_id": 60,
                "seat_row": 3,
                "seat_column": "A",
                "seat_label": "EKS1-2A",
                "available": true
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_id": 57,
                "seat_row": 2,
                "seat_column": "C",
                "seat_label": "EKS1-2C",
                "available": true
            },
            {
                "seat_id": 58,
                "seat_row": 3,
                "seat_column": "B",
                "seat_label": "EKS1-2B",
                "available": true
            },
            {
                "seat_id": 59,
                "seat_row": 3,
                "seat_column": "D",
                "seat_label": "EKS1-2D",
                "available": true
            },
            {
                "seat_id": 60,
                "seat_row": 3,
                "seat_column": "A",
                "seat_label": "EKS1-2A",
                "available": true
            }
        ]
    }
    ]

const generateSeatRows = (wagon:number) :SeatRowData[]=> {
    const rows: SeatRowData[] = []

    for (let i = 1; i < 21; i ++) {
        const rowElements:RowElement[] = Array(4)

        rowElements[0] = {
            seat_row: i,
            seat_id: i*4*wagon,
            available: Math.random()>= 0.5,
            seat_column: "A",
            seat_label: `EKS-${wagon}/${i}A`, 
        }
        rowElements[1] = {
            seat_row: i,
            seat_id: i*4*wagon + 1,
            available: Math.random()>= 0.5,
            seat_column: "B",
            seat_label: `EKS-${wagon}/${i}B`, 
        } 
        rowElements[2] = {
            seat_row: i,
            seat_id: i*4*wagon + 2,
            available: Math.random()>= 0.5,
            seat_column: "C",
            seat_label: `EKS-${wagon}/${i}C`, 
        }
        rowElements[3] = {
            seat_row: i,
            seat_id: i*4*wagon + 3,
            available: Math.random()>= 0.5,
            seat_column: "D",
            seat_label: `EKS-${wagon}/${i}D`, 
        }

        const row:SeatRowData = {
            row_elements: rowElements
        } 
        rows.push(row)
    }

    return rows
}
export type AvailableSeatsData = {
    wagon_class : string
    wagon_number: number
    seating_rows: SeatRowData[]
}

export type WagonSelector = {
    wagon_class: string,
    wagon_number: number,
  }
const wagon1 = [
    {
        "row_elements": [
            {
                "seat_row": 1,
                "seat_id": 4,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-1/1A"
            },
            {
                "seat_row": 1,
                "seat_id": 5,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-1/1B"
            },
            {
                "seat_row": 1,
                "seat_id": 6,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-1/1C"
            },
            {
                "seat_row": 1,
                "seat_id": 7,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-1/1D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 2,
                "seat_id": 8,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-1/2A"
            },
            {
                "seat_row": 2,
                "seat_id": 9,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-1/2B"
            },
            {
                "seat_row": 2,
                "seat_id": 10,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-1/2C"
            },
            {
                "seat_row": 2,
                "seat_id": 11,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-1/2D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 3,
                "seat_id": 12,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-1/3A"
            },
            {
                "seat_row": 3,
                "seat_id": 13,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-1/3B"
            },
            {
                "seat_row": 3,
                "seat_id": 14,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-1/3C"
            },
            {
                "seat_row": 3,
                "seat_id": 15,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-1/3D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 4,
                "seat_id": 16,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-1/4A"
            },
            {
                "seat_row": 4,
                "seat_id": 17,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-1/4B"
            },
            {
                "seat_row": 4,
                "seat_id": 18,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-1/4C"
            },
            {
                "seat_row": 4,
                "seat_id": 19,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-1/4D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 5,
                "seat_id": 20,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-1/5A"
            },
            {
                "seat_row": 5,
                "seat_id": 21,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-1/5B"
            },
            {
                "seat_row": 5,
                "seat_id": 22,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-1/5C"
            },
            {
                "seat_row": 5,
                "seat_id": 23,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-1/5D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 6,
                "seat_id": 24,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-1/6A"
            },
            {
                "seat_row": 6,
                "seat_id": 25,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-1/6B"
            },
            {
                "seat_row": 6,
                "seat_id": 26,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-1/6C"
            },
            {
                "seat_row": 6,
                "seat_id": 27,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-1/6D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 7,
                "seat_id": 28,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-1/7A"
            },
            {
                "seat_row": 7,
                "seat_id": 29,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-1/7B"
            },
            {
                "seat_row": 7,
                "seat_id": 30,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-1/7C"
            },
            {
                "seat_row": 7,
                "seat_id": 31,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-1/7D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 8,
                "seat_id": 32,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-1/8A"
            },
            {
                "seat_row": 8,
                "seat_id": 33,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-1/8B"
            },
            {
                "seat_row": 8,
                "seat_id": 34,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-1/8C"
            },
            {
                "seat_row": 8,
                "seat_id": 35,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-1/8D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 9,
                "seat_id": 36,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-1/9A"
            },
            {
                "seat_row": 9,
                "seat_id": 37,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-1/9B"
            },
            {
                "seat_row": 9,
                "seat_id": 38,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-1/9C"
            },
            {
                "seat_row": 9,
                "seat_id": 39,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-1/9D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 10,
                "seat_id": 40,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-1/10A"
            },
            {
                "seat_row": 10,
                "seat_id": 41,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-1/10B"
            },
            {
                "seat_row": 10,
                "seat_id": 42,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-1/10C"
            },
            {
                "seat_row": 10,
                "seat_id": 43,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-1/10D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 11,
                "seat_id": 44,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-1/11A"
            },
            {
                "seat_row": 11,
                "seat_id": 45,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-1/11B"
            },
            {
                "seat_row": 11,
                "seat_id": 46,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-1/11C"
            },
            {
                "seat_row": 11,
                "seat_id": 47,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-1/11D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 12,
                "seat_id": 48,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-1/12A"
            },
            {
                "seat_row": 12,
                "seat_id": 49,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-1/12B"
            },
            {
                "seat_row": 12,
                "seat_id": 50,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-1/12C"
            },
            {
                "seat_row": 12,
                "seat_id": 51,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-1/12D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 13,
                "seat_id": 52,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-1/13A"
            },
            {
                "seat_row": 13,
                "seat_id": 53,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-1/13B"
            },
            {
                "seat_row": 13,
                "seat_id": 54,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-1/13C"
            },
            {
                "seat_row": 13,
                "seat_id": 55,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-1/13D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 14,
                "seat_id": 56,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-1/14A"
            },
            {
                "seat_row": 14,
                "seat_id": 57,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-1/14B"
            },
            {
                "seat_row": 14,
                "seat_id": 58,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-1/14C"
            },
            {
                "seat_row": 14,
                "seat_id": 59,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-1/14D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 15,
                "seat_id": 60,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-1/15A"
            },
            {
                "seat_row": 15,
                "seat_id": 61,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-1/15B"
            },
            {
                "seat_row": 15,
                "seat_id": 62,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-1/15C"
            },
            {
                "seat_row": 15,
                "seat_id": 63,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-1/15D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 16,
                "seat_id": 64,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-1/16A"
            },
            {
                "seat_row": 16,
                "seat_id": 65,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-1/16B"
            },
            {
                "seat_row": 16,
                "seat_id": 66,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-1/16C"
            },
            {
                "seat_row": 16,
                "seat_id": 67,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-1/16D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 17,
                "seat_id": 68,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-1/17A"
            },
            {
                "seat_row": 17,
                "seat_id": 69,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-1/17B"
            },
            {
                "seat_row": 17,
                "seat_id": 70,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-1/17C"
            },
            {
                "seat_row": 17,
                "seat_id": 71,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-1/17D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 18,
                "seat_id": 72,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-1/18A"
            },
            {
                "seat_row": 18,
                "seat_id": 73,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-1/18B"
            },
            {
                "seat_row": 18,
                "seat_id": 74,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-1/18C"
            },
            {
                "seat_row": 18,
                "seat_id": 75,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-1/18D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 19,
                "seat_id": 76,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-1/19A"
            },
            {
                "seat_row": 19,
                "seat_id": 77,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-1/19B"
            },
            {
                "seat_row": 19,
                "seat_id": 78,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-1/19C"
            },
            {
                "seat_row": 19,
                "seat_id": 79,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-1/19D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 20,
                "seat_id": 80,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-1/20A"
            },
            {
                "seat_row": 20,
                "seat_id": 81,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-1/20B"
            },
            {
                "seat_row": 20,
                "seat_id": 82,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-1/20C"
            },
            {
                "seat_row": 20,
                "seat_id": 83,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-1/20D"
            }
        ]
    }
]

const wagon2 = [
    {
        "row_elements": [
            {
                "seat_row": 1,
                "seat_id": 8,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-2/1A"
            },
            {
                "seat_row": 1,
                "seat_id": 9,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-2/1B"
            },
            {
                "seat_row": 1,
                "seat_id": 10,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-2/1C"
            },
            {
                "seat_row": 1,
                "seat_id": 11,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-2/1D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 2,
                "seat_id": 16,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-2/2A"
            },
            {
                "seat_row": 2,
                "seat_id": 17,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-2/2B"
            },
            {
                "seat_row": 2,
                "seat_id": 18,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-2/2C"
            },
            {
                "seat_row": 2,
                "seat_id": 19,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-2/2D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 3,
                "seat_id": 24,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-2/3A"
            },
            {
                "seat_row": 3,
                "seat_id": 25,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-2/3B"
            },
            {
                "seat_row": 3,
                "seat_id": 26,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-2/3C"
            },
            {
                "seat_row": 3,
                "seat_id": 27,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-2/3D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 4,
                "seat_id": 32,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-2/4A"
            },
            {
                "seat_row": 4,
                "seat_id": 33,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-2/4B"
            },
            {
                "seat_row": 4,
                "seat_id": 34,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-2/4C"
            },
            {
                "seat_row": 4,
                "seat_id": 35,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-2/4D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 5,
                "seat_id": 40,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-2/5A"
            },
            {
                "seat_row": 5,
                "seat_id": 41,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-2/5B"
            },
            {
                "seat_row": 5,
                "seat_id": 42,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-2/5C"
            },
            {
                "seat_row": 5,
                "seat_id": 43,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-2/5D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 6,
                "seat_id": 48,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-2/6A"
            },
            {
                "seat_row": 6,
                "seat_id": 49,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-2/6B"
            },
            {
                "seat_row": 6,
                "seat_id": 50,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-2/6C"
            },
            {
                "seat_row": 6,
                "seat_id": 51,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-2/6D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 7,
                "seat_id": 56,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-2/7A"
            },
            {
                "seat_row": 7,
                "seat_id": 57,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-2/7B"
            },
            {
                "seat_row": 7,
                "seat_id": 58,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-2/7C"
            },
            {
                "seat_row": 7,
                "seat_id": 59,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-2/7D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 8,
                "seat_id": 64,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-2/8A"
            },
            {
                "seat_row": 8,
                "seat_id": 65,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-2/8B"
            },
            {
                "seat_row": 8,
                "seat_id": 66,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-2/8C"
            },
            {
                "seat_row": 8,
                "seat_id": 67,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-2/8D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 9,
                "seat_id": 72,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-2/9A"
            },
            {
                "seat_row": 9,
                "seat_id": 73,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-2/9B"
            },
            {
                "seat_row": 9,
                "seat_id": 74,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-2/9C"
            },
            {
                "seat_row": 9,
                "seat_id": 75,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-2/9D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 10,
                "seat_id": 80,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-2/10A"
            },
            {
                "seat_row": 10,
                "seat_id": 81,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-2/10B"
            },
            {
                "seat_row": 10,
                "seat_id": 82,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-2/10C"
            },
            {
                "seat_row": 10,
                "seat_id": 83,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-2/10D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 11,
                "seat_id": 88,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-2/11A"
            },
            {
                "seat_row": 11,
                "seat_id": 89,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-2/11B"
            },
            {
                "seat_row": 11,
                "seat_id": 90,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-2/11C"
            },
            {
                "seat_row": 11,
                "seat_id": 91,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-2/11D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 12,
                "seat_id": 96,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-2/12A"
            },
            {
                "seat_row": 12,
                "seat_id": 97,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-2/12B"
            },
            {
                "seat_row": 12,
                "seat_id": 98,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-2/12C"
            },
            {
                "seat_row": 12,
                "seat_id": 99,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-2/12D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 13,
                "seat_id": 104,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-2/13A"
            },
            {
                "seat_row": 13,
                "seat_id": 105,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-2/13B"
            },
            {
                "seat_row": 13,
                "seat_id": 106,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-2/13C"
            },
            {
                "seat_row": 13,
                "seat_id": 107,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-2/13D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 14,
                "seat_id": 112,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-2/14A"
            },
            {
                "seat_row": 14,
                "seat_id": 113,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-2/14B"
            },
            {
                "seat_row": 14,
                "seat_id": 114,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-2/14C"
            },
            {
                "seat_row": 14,
                "seat_id": 115,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-2/14D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 15,
                "seat_id": 120,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-2/15A"
            },
            {
                "seat_row": 15,
                "seat_id": 121,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-2/15B"
            },
            {
                "seat_row": 15,
                "seat_id": 122,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-2/15C"
            },
            {
                "seat_row": 15,
                "seat_id": 123,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-2/15D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 16,
                "seat_id": 128,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-2/16A"
            },
            {
                "seat_row": 16,
                "seat_id": 129,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-2/16B"
            },
            {
                "seat_row": 16,
                "seat_id": 130,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-2/16C"
            },
            {
                "seat_row": 16,
                "seat_id": 131,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-2/16D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 17,
                "seat_id": 136,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-2/17A"
            },
            {
                "seat_row": 17,
                "seat_id": 137,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-2/17B"
            },
            {
                "seat_row": 17,
                "seat_id": 138,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-2/17C"
            },
            {
                "seat_row": 17,
                "seat_id": 139,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-2/17D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 18,
                "seat_id": 144,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-2/18A"
            },
            {
                "seat_row": 18,
                "seat_id": 145,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-2/18B"
            },
            {
                "seat_row": 18,
                "seat_id": 146,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-2/18C"
            },
            {
                "seat_row": 18,
                "seat_id": 147,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-2/18D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 19,
                "seat_id": 152,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-2/19A"
            },
            {
                "seat_row": 19,
                "seat_id": 153,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-2/19B"
            },
            {
                "seat_row": 19,
                "seat_id": 154,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-2/19C"
            },
            {
                "seat_row": 19,
                "seat_id": 155,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-2/19D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 20,
                "seat_id": 160,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-2/20A"
            },
            {
                "seat_row": 20,
                "seat_id": 161,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-2/20B"
            },
            {
                "seat_row": 20,
                "seat_id": 162,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-2/20C"
            },
            {
                "seat_row": 20,
                "seat_id": 163,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-2/20D"
            }
        ]
    }
]

const wagon3 = [
    {
        "row_elements": [
            {
                "seat_row": 1,
                "seat_id": 12,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-3/1A"
            },
            {
                "seat_row": 1,
                "seat_id": 13,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-3/1B"
            },
            {
                "seat_row": 1,
                "seat_id": 14,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-3/1C"
            },
            {
                "seat_row": 1,
                "seat_id": 15,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-3/1D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 2,
                "seat_id": 24,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-3/2A"
            },
            {
                "seat_row": 2,
                "seat_id": 25,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-3/2B"
            },
            {
                "seat_row": 2,
                "seat_id": 26,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-3/2C"
            },
            {
                "seat_row": 2,
                "seat_id": 27,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-3/2D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 3,
                "seat_id": 36,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-3/3A"
            },
            {
                "seat_row": 3,
                "seat_id": 37,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-3/3B"
            },
            {
                "seat_row": 3,
                "seat_id": 38,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-3/3C"
            },
            {
                "seat_row": 3,
                "seat_id": 39,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-3/3D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 4,
                "seat_id": 48,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-3/4A"
            },
            {
                "seat_row": 4,
                "seat_id": 49,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-3/4B"
            },
            {
                "seat_row": 4,
                "seat_id": 50,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-3/4C"
            },
            {
                "seat_row": 4,
                "seat_id": 51,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-3/4D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 5,
                "seat_id": 60,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-3/5A"
            },
            {
                "seat_row": 5,
                "seat_id": 61,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-3/5B"
            },
            {
                "seat_row": 5,
                "seat_id": 62,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-3/5C"
            },
            {
                "seat_row": 5,
                "seat_id": 63,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-3/5D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 6,
                "seat_id": 72,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-3/6A"
            },
            {
                "seat_row": 6,
                "seat_id": 73,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-3/6B"
            },
            {
                "seat_row": 6,
                "seat_id": 74,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-3/6C"
            },
            {
                "seat_row": 6,
                "seat_id": 75,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-3/6D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 7,
                "seat_id": 84,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-3/7A"
            },
            {
                "seat_row": 7,
                "seat_id": 85,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-3/7B"
            },
            {
                "seat_row": 7,
                "seat_id": 86,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-3/7C"
            },
            {
                "seat_row": 7,
                "seat_id": 87,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-3/7D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 8,
                "seat_id": 96,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-3/8A"
            },
            {
                "seat_row": 8,
                "seat_id": 97,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-3/8B"
            },
            {
                "seat_row": 8,
                "seat_id": 98,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-3/8C"
            },
            {
                "seat_row": 8,
                "seat_id": 99,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-3/8D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 9,
                "seat_id": 108,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-3/9A"
            },
            {
                "seat_row": 9,
                "seat_id": 109,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-3/9B"
            },
            {
                "seat_row": 9,
                "seat_id": 110,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-3/9C"
            },
            {
                "seat_row": 9,
                "seat_id": 111,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-3/9D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 10,
                "seat_id": 120,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-3/10A"
            },
            {
                "seat_row": 10,
                "seat_id": 121,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-3/10B"
            },
            {
                "seat_row": 10,
                "seat_id": 122,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-3/10C"
            },
            {
                "seat_row": 10,
                "seat_id": 123,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-3/10D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 11,
                "seat_id": 132,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-3/11A"
            },
            {
                "seat_row": 11,
                "seat_id": 133,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-3/11B"
            },
            {
                "seat_row": 11,
                "seat_id": 134,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-3/11C"
            },
            {
                "seat_row": 11,
                "seat_id": 135,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-3/11D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 12,
                "seat_id": 144,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-3/12A"
            },
            {
                "seat_row": 12,
                "seat_id": 145,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-3/12B"
            },
            {
                "seat_row": 12,
                "seat_id": 146,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-3/12C"
            },
            {
                "seat_row": 12,
                "seat_id": 147,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-3/12D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 13,
                "seat_id": 156,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-3/13A"
            },
            {
                "seat_row": 13,
                "seat_id": 157,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-3/13B"
            },
            {
                "seat_row": 13,
                "seat_id": 158,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-3/13C"
            },
            {
                "seat_row": 13,
                "seat_id": 159,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-3/13D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 14,
                "seat_id": 168,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-3/14A"
            },
            {
                "seat_row": 14,
                "seat_id": 169,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-3/14B"
            },
            {
                "seat_row": 14,
                "seat_id": 170,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-3/14C"
            },
            {
                "seat_row": 14,
                "seat_id": 171,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-3/14D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 15,
                "seat_id": 180,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-3/15A"
            },
            {
                "seat_row": 15,
                "seat_id": 181,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-3/15B"
            },
            {
                "seat_row": 15,
                "seat_id": 182,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-3/15C"
            },
            {
                "seat_row": 15,
                "seat_id": 183,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-3/15D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 16,
                "seat_id": 192,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-3/16A"
            },
            {
                "seat_row": 16,
                "seat_id": 193,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-3/16B"
            },
            {
                "seat_row": 16,
                "seat_id": 194,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-3/16C"
            },
            {
                "seat_row": 16,
                "seat_id": 195,
                "available": true,
                "seat_column": "D",
                "seat_label": "EKS-3/16D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 17,
                "seat_id": 204,
                "available": false,
                "seat_column": "A",
                "seat_label": "EKS-3/17A"
            },
            {
                "seat_row": 17,
                "seat_id": 205,
                "available": true,
                "seat_column": "B",
                "seat_label": "EKS-3/17B"
            },
            {
                "seat_row": 17,
                "seat_id": 206,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-3/17C"
            },
            {
                "seat_row": 17,
                "seat_id": 207,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-3/17D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 18,
                "seat_id": 216,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-3/18A"
            },
            {
                "seat_row": 18,
                "seat_id": 217,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-3/18B"
            },
            {
                "seat_row": 18,
                "seat_id": 218,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-3/18C"
            },
            {
                "seat_row": 18,
                "seat_id": 219,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-3/18D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 19,
                "seat_id": 228,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-3/19A"
            },
            {
                "seat_row": 19,
                "seat_id": 229,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-3/19B"
            },
            {
                "seat_row": 19,
                "seat_id": 230,
                "available": true,
                "seat_column": "C",
                "seat_label": "EKS-3/19C"
            },
            {
                "seat_row": 19,
                "seat_id": 231,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-3/19D"
            }
        ]
    },
    {
        "row_elements": [
            {
                "seat_row": 20,
                "seat_id": 240,
                "available": true,
                "seat_column": "A",
                "seat_label": "EKS-3/20A"
            },
            {
                "seat_row": 20,
                "seat_id": 241,
                "available": false,
                "seat_column": "B",
                "seat_label": "EKS-3/20B"
            },
            {
                "seat_row": 20,
                "seat_id": 242,
                "available": false,
                "seat_column": "C",
                "seat_label": "EKS-3/20C"
            },
            {
                "seat_row": 20,
                "seat_id": 243,
                "available": false,
                "seat_column": "D",
                "seat_label": "EKS-3/20D"
            }
        ]
    }
]
export const availableSeats: AvailableSeatsData[] = [
    {
        wagon_class: "EKS",
        wagon_number: 1,
        seating_rows: wagon1
    },
    {
        wagon_class: "EKS",
        wagon_number: 2,
        seating_rows: wagon2
    },
    {
        wagon_class: "EKS",
        wagon_number: 3,
        seating_rows: wagon3
    },
    
]

