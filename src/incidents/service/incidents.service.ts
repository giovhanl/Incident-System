import { Injectable } from '@nestjs/common';
import { IncidentDetailRepository, IncidentMasterRepository } from 'src/repos/incident.repository';
import { UsersRepository } from 'src/repos/user.repository';
import { IncidentMaster } from 'src/schema/incident.schema';
import { IncidentMasterModel } from '../model/incident.model';


@Injectable()
export class IncidentsService {
  constructor(private readonly usersRepository: UsersRepository,
    private readonly incidentMasterRepo: IncidentMasterRepository,
    private readonly incidentDetailRepo: IncidentDetailRepository) {}


  getAll(): Promise<IncidentMaster[] | null> {
    return this.incidentMasterRepo.find({});
  }

  getIncidentByID(id: number): Promise<IncidentMaster> {
    return this.incidentMasterRepo.findById(id);
  }

  addIncident(incMasterModel: IncidentMasterModel): Promise<IncidentMaster> {
    //   const incidentRecord = new IncidentMaster {
    //     title: incMasterModel.title,
    //     description: incMasterModel.description,
    //     expectedBehavior: incMasterModel.expectedBehavior,
    //     state: incMasterModel.state,
    //     reason: incidentMasterModel.reason,
    //     foundInVersion: incidentMasterModel.foundInVersion,
    //     developer: incidentMasterModel.developer,
    //     tester: incidentMasterModel.tester,
    //     incidentType: incidentMasterModel.incidentType,
    //     createdBy: 'Admin',
    //     modifiedBy: 'Admin'
    //   };
    return this.incidentMasterRepo.create({
        title: incMasterModel.title,
        description: incMasterModel.description,
        expectedBehavior: incMasterModel.expectedBehavior,
        state: incMasterModel.state,
        reason: incMasterModel.reason,
        foundInVersion: incMasterModel.foundInVersion,
        developer: incMasterModel.developer,
        tester: incMasterModel.tester,
        incidentType: incMasterModel.incidentType,
        createdBy: 'Admin',
        modifiedBy: 'Admin'
      });
  }

  async update(incidentId: string, incidentUpdates: IncidentMasterModel): Promise<IncidentMaster> {
    return this.incidentMasterRepo.update({ incidentId }, incidentUpdates);
  }

  async assignincident(incidentId: string, assignToUserId: number): Promise<IncidentMaster> {
    return this.incidentMasterRepo.update({ incidentId }, { developer: assignToUserId });
  }

  // TODO: record in the detail the action that it was acknowledged by user
  async acknowledgeincident(incidentId: string, userId: number): Promise<IncidentMaster> {
    return this.incidentMasterRepo.update({ incidentId }, { developer: userId });
  }

  async resolvedincident(incidentId: string, userId: number): Promise<IncidentMaster> {
    return this.incidentMasterRepo.update({ incidentId }, { status: 'Resolved' });
  }

  async deleteincident(incidentId: string): Promise<IncidentMaster> {
    return this.incidentMasterRepo.delete({ incidentId: incidentId  });
  }
}