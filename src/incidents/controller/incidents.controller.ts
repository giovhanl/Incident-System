import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from 'src/users/service/users.service';
import { IncidentMasterModel } from '../model/incident.model';
import { IncidentsService } from '../service/incidents.service';



@ApiTags("incidents")
@Controller('incidents')
export class IncidentsController {
    constructor(private usersService: UsersService,
        private readonly incidentsService: IncidentsService) {}

  @ApiCreatedResponse({ type: IncidentMasterModel })
  @Get()
  getAll(): any {
    return this.usersService.getAll();
  }

  @Get(':id')
  getIncidentbyId(@Param('id') id: string): any {
    return this.incidentsService.getIncidentByID(Number(id));
  }

  @ApiCreatedResponse({ type: IncidentMasterModel })
  @Post('add')
  addUser(@Body() body: IncidentMasterModel): any {
    return this.incidentsService.addIncident(body);
  }

  @ApiCreatedResponse({ type: IncidentMasterModel })
  @Post('update')
  updateUser(@Body() body: IncidentMasterModel): any {
    return this.incidentsService.update(body.incidentId, body);
  }

  @ApiCreatedResponse({ type: IncidentMasterModel })
  @Post('assign')
  assignIncident(@Body() body: IncidentMasterModel): any {
    return this.incidentsService.assignincident(body.incidentId, body.assignedTo);
  }

  @ApiCreatedResponse({ type: IncidentMasterModel })
  @Post('resolve')
  resolveIncident(@Body() body: IncidentMasterModel): any {
    return this.incidentsService.resolvedincident(body.incidentId, '33');
  }

  @ApiCreatedResponse({ type: IncidentMasterModel })
  @Post('acknowledge')
  acknowledgeIncident(@Body() body: IncidentMasterModel): any {
    return this.incidentsService.acknowledgeincident(body.incidentId, '33');
  }
}
