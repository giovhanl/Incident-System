import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

@Injectable()
export class IncidentQueryDto {
  @ApiProperty()
  incidentId: string;

  @ApiProperty()
  userId: string;
}
