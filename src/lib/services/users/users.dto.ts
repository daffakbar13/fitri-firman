namespace UsersDto {
  interface Parent {
    isAlm: boolean
    name: string
  }

  export interface User {
    _id: string
    role: 'cpw' | 'cpp' | 'guest'
    shortName: string
    fullName: string
    gender: 'male' | 'female' | null
    childOrder: number
    father: Parent
    mother: Parent
  }
}

export default UsersDto
