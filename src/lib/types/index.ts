import * as Axios from 'axios'

namespace GlobalTypes {
  export type Headers = Axios.AxiosRequestConfig['headers']

  export interface DefaultResponse<Data extends object | string | number | null = null> {
    data: Data
    message: string
    status: string
    verified: boolean
    code: number
  }

  export interface PaginationResponse {
    pageNumber: number
    totalPage: number
    pageSize: number
    totalRecord: number
  }

  export interface PaginationRequest {
    pageNumber?: number
    pageSize?: number
    fetchAll?: boolean
  }

  export type DefaultResponseWithPagination<Data extends object[]> = DefaultResponse<{
    results: Data
    pagination: PaginationResponse
  }>
}

export default GlobalTypes
