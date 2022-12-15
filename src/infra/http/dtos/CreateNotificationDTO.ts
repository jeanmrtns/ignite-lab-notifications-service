import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateNotificationDTO {
  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @Length(5, 255)
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  recipientId: string;
}
