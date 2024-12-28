/* eslint-disable no-unused-vars */

import GuestsDto from '@/lib/services/guests/guests.dto'

interface States {
  isOpenModalAddGroup: boolean
  viewGroupId: string
  editGroupId: string
  deleteGroupId: string
  isOpenModalAddGuest: boolean
  editGuestId: string
  deleteGuestId: string
  deleteWishId: string
}

interface Mutations {
  toggleModalAddGroup(): void
  toggleModalAddGuest(): void
  handleViewGroup(viewGroupId: string): () => void
  handleEditGroup(editGroupId: string): () => void
  handleDeleteGroup(deleteGroupId: string): () => void
  handleEditGuest(editGuestId: string): () => void
  handleDeleteGuest(deleteGuestId: string): () => void
  handleDeleteWish(deleteWishId: string): () => void
  copyTextShareInvitation(guest: GuestsDto.Guest): void
}

export default interface UseRahasiaStore extends States, Mutations {}
