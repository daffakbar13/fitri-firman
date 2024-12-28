import InstanceAxios from '@/configs/axios'
import createQuery from '@/lib/helpers/createQuery'

import ViewHistoriesDto from './view-histories.dto'

namespace ViewHistoriesService {
  const baseURL = 'api/view-histories'
  const service = InstanceAxios({ baseURL })

  export async function GetViewHistories() {
    return service.get<null, ViewHistoriesDto.ViewHistory[]>('')
  }

  GetViewHistories.useQuery = createQuery(GetViewHistories, { refetchOnMount: true })
}

export default ViewHistoriesService
