import User from './User'

declare type Definition = {
  phrase: string
  meaning: string
  upvotes: number
  downvotes: number
  author: User
  date: Date
}

export default Definition