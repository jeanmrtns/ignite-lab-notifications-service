import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationDTO } from './dtos/CreateNotificationDTO';
import { PrismaService } from './infra/prisma/prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  list() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationDTO) {
    await this.prismaService.notification.create({
      data: {
        category: body.category,
        content: body.content,
        recipientId: body.recipientId,
      },
    });
  }
}
