import { prisma } from '../../prisma'

import {
  FeedbackCreateCommand,
  FeedbacksRepository,
} from '../feedbacks-repository'

export class PrismaFeedbackRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateCommand) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    })
  }
}
