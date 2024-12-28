import InstanceAxios from '@/configs/axios'
import createMutation from '@/lib/helpers/createMutation'
import createQuery from '@/lib/helpers/createQuery'

import GuestGroupDto from './guest-groups.dto'

namespace GuestGroupsService {
  const baseURL = 'api/guest-groups'
  const service = InstanceAxios({ baseURL })

  export async function GetGuestGroups() {
    return service.get<null, GuestGroupDto.GuestGroup[]>('/')
  }

  GetGuestGroups.useQuery = createQuery(GetGuestGroups, { refetchOnMount: true })

  export async function CreateGuestGroup(payload: GuestGroupDto.CreateGuestGroup) {
    return service.post<null>('/', payload)
  }

  CreateGuestGroup.useMutation = createMutation(CreateGuestGroup)

  export async function UpdateGuestGroup(id: string, payload: GuestGroupDto.CreateGuestGroup) {
    return service.put<null>(`/${id}`, payload)
  }

  UpdateGuestGroup.useMutation = createMutation(UpdateGuestGroup)

  export async function DeleteGuestGroup(id: string) {
    return service.delete<null>(`/${id}`)
  }

  DeleteGuestGroup.useMutation = createMutation(DeleteGuestGroup)
}

export default GuestGroupsService
