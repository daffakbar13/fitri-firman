import GuestsDto from '../guests/guests.dto'

namespace ViewHistoriesDto {
  export interface ViewHistory extends GuestsDto.Guest {
    groupName: string
    createdAt: Date
  }
}

export default ViewHistoriesDto
