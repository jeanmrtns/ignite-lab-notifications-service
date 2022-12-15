import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from '@app/use-cases/send-notification';
import { CreateNotificationDTO } from '../dtos/CreateNotificationDTO';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationDTO) {
    const { notification } = await this.sendNotification.execute({
      recipientId: body.recipientId,
      content: body.content,
      category: body.category,
    });

    return { notification };
  }
}
