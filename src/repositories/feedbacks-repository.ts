export interface FeedbackCreateCommand {
  type: string
  comment: string
  screenshot?: string
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreateCommand) => Promise<void>
}
