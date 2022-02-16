import { Body, Controller, Get, Post, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from 'src/users/service/users.service';
import { Role } from 'src/helpers/roles/role.enum';
import { Roles } from 'src/helpers/roles/roles.decorator';
import { IncidentMasterDto } from '../model/incident.modelDto';
import { IncidentQueryDto } from '../model/incident.queryDto';
import { IncidentsService } from '../service/incidents.service';



@ApiTags("incidents")
@Controller('incidents')
export class IncidentsController {
    constructor(
        private readonly incidentsService: IncidentsService) {}

  @ApiCreatedResponse({ type: IncidentMasterDto })
  @Get()
  getAll(): any {
    return this.incidentsService.getAll();
  }

  @Get(':id')
  getIncidentbyId(@Param('id') id: string): any {
    return this.incidentsService.getIncidentByID(id);
  }

  @Roles(Role.Admin)
  @ApiCreatedResponse({ type: IncidentMasterDto })
  @UsePipes(new ValidationPipe())
  @Post('add')
  addUser(@Body() body: IncidentMasterDto): any {
    return this.incidentsService.addIncident(body);
  }

  @UsePipes(new ValidationPipe())
  @ApiCreatedResponse({ type: IncidentMasterDto })
  @Post('update')
  updateUser(@Body() body: IncidentMasterDto): any {
    return this.incidentsService.update(body.incidentId, body);
  }

  @ApiCreatedResponse({ type: IncidentQueryDto })
  @Post('assign')
  assignIncident(@Body() body: IncidentQueryDto): any {
    return this.incidentsService.assignincident(body.incidentId, body.userId);
  }

  @ApiCreatedResponse({ type: IncidentQueryDto })
  @Post('resolve')
  resolveIncident(@Body() body: IncidentQueryDto): any {
    return this.incidentsService.resolvedincident(body.incidentId, body.userId);
  }

  @ApiCreatedResponse({ type: IncidentQueryDto })
  @Post('acknowledge')
  acknowledgeIncident(@Body() body: IncidentQueryDto): any {
    return this.incidentsService.acknowledgeincident(body.incidentId, body.userId);
  }
}
