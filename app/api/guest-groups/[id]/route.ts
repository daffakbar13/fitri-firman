import { ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'

import GuestGroupsModel from '@/server/models/guest_groups'

type Params = { params: { id: string } }

export async function PUT(req: Request, { params }: Params) {
  const groupId = new ObjectId(params.id)
  const body = await req.json()
  const groups = await GuestGroupsModel()

  await groups.updateOne({ _id: groupId }, { $set: body })

  return NextResponse.json({ status: 204 })
}

export async function DELETE(_: Request, { params }: Params) {
  const groupId = new ObjectId(params.id)
  const groups = await GuestGroupsModel()

  await groups.deleteOne({ _id: groupId })

  return NextResponse.json({ status: 204 })
}
