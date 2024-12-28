/* eslint-disable no-underscore-dangle */
import { NextResponse } from 'next/server'

import GuestGroupsModel from '@/server/models/guest_groups'
import ViewHistoriesModel from '@/server/models/view_histories'

export async function GET() {
  const viewHistories = await ViewHistoriesModel()
  const groups = await GuestGroupsModel()
  const groupList = await groups.find({}).toArray()
  const data = await viewHistories
    .find({}, { sort: ['created_at', -1] })
    .toArray()
    .then((res) =>
      res.map((e) => ({ ...e, group_name: groupList.find((g) => g._id.equals(e.group_id))?.name })),
    )

  return new NextResponse(JSON.stringify({ data }), { status: 200 })
}
