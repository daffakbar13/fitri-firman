import { Db, MongoClient } from 'mongodb'

let isConnected = false
let db: Db

const client = new MongoClient(String(process.env.NEXT_PUBLIC_MONGODB_URL))

export default async function database() {
  if (!isConnected) {
    await client.connect().then(() => {
      isConnected = true
    })
  }

  if (!db) {
    db = client.db('invitation2')
  }

  return db
}
