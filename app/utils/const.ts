export const DIRECTION_ROOM = {
  East: 1, // Hướng Đông
  West: 2, // Hướng Tây
  South: 3, // Hướng Nam
  North: 4, // Hướng Bắc
  Southeast: 5, // Hướng Đông Nam
  Southwest: 6, // Hướng Tây Nam
  Northeast: 7, // Hướng Đông Bắc
  Northwest: 8, // Hướng Tây Bắc
} as const


export const DIRECTION_ROOM_OPTIONS = [
  { label: 'Hướng Đông', value: DIRECTION_ROOM.East },
  { label: 'Hướng Tây', value: DIRECTION_ROOM.West },
  { label: 'Hướng Nam', value: DIRECTION_ROOM.South },
  { label: 'Hướng Bắc', value: DIRECTION_ROOM.North },
  { label: 'Hướng Đông Nam', value: DIRECTION_ROOM.Southeast },
  { label: 'Hướng Tây Nam', value: DIRECTION_ROOM.Southwest },
  { label: 'Hướng Đông Bắc', value: DIRECTION_ROOM.Northeast },
  { label: 'Hướng Tây Bắc', value: DIRECTION_ROOM.Northwest },
]
