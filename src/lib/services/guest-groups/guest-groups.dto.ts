namespace GuestGroupDto {
  export interface GuestGroup {
    id: string
    name: string
    total: number
  }

  export interface CreateGuestGroup {
    name: string
  }
}

export default GuestGroupDto
