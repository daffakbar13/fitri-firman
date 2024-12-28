namespace WishesDto {
  export interface Wish {
    id: string
    guest_id: string
    group_id: string
    name: string
    description: string
    status: number
    createdAt: Date
  }

  export interface CreateWish {
    guest_id: string
    group_id: string
    name: string
    description: string
    status: number
  }
}

export default WishesDto
