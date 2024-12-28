import { ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'

import WishesModel from '@/server/models/wishes'

type Params = { params: { id: string } }

export async function DELETE(_: Request, { params }: Params) {
  const wishId = new ObjectId(params.id)
  const wishes = await WishesModel()

  await wishes.deleteOne({ _id: wishId })

  return NextResponse.json({ status: 204 })
}
