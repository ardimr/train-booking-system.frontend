
export type RowElement = {
  seat_id: number
  seat_row: number
  seat_column: string
  seat_label: string
  available: boolean
}

export type SeatRow = {
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
  seatId:number
}

export const passengerSeats: PassengerSeat[] = [
    {passengerNumber:1, seatId:0},
    {passengerNumber:2, seatId:0}
]
export const seatRows:SeatRow[] = [
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