import { Injectable } from '@nestjs/common';
import { IPaging } from 'src/helpers/paging/query.paging';
import { IncidentDetailRepository, IncidentMasterRepository } from 'src/repos/incident.repository';
import { IncidentDetail, IncidentMaster } from 'src/schema/incident.schema';
import { IncidentStatus } from '../model/incident.enum';
import { IncidentMasterDto } from '../model/incident.modelDto';


@Injectable()
export class IncidentsService {
  constructor(
    private readonly incidentMasterRepo: IncidentMasterRepository,
    private readonly incidentDetailRepo: IncidentDetailRepository) {}


  getAll(): Promise<IncidentMaster[] | null> {
    return this.incidentMasterRepo.find({});
  }

  query(paging: IPaging): Promise<IncidentMaster[] | null> {
    return this.incidentMasterRepo.query(paging, {});
  }

  getIncidentByID(id: number): Promise<IncidentMaster> {
    return this.incidentMasterRepo.findById(id);
  }

  addIncident(incMasterModel: IncidentMasterDto): Promise<IncidentMaster> {
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
        modifiedBy: 'Admin',
        dateCreated: new Date(),
        dateModified: new Date()
      });
  }

  async update(incidentId: string, incidentUpdates: IncidentMasterDto): Promise<IncidentMaster> {
    return this.incidentMasterRepo.update({ _id: incidentId  }, incidentUpdates);
  }

  async assignincident(incidentId: string, assignToUserId: string): Promise<IncidentMaster> {
    const detail = await this.createIncidentDetail(incidentId, assignToUserId, IncidentStatus.Assigned);
    return this.incidentMasterRepo.update({ _id: incidentId  }, { developer: assignToUserId });
  }

  // TODO: record in the detail the action that it was acknowledged by user
  async acknowledgeincident(incidentId: string, userId: string): Promise<IncidentMaster> {
    const detail = await this.createIncidentDetail(incidentId, userId, IncidentStatus.Acknowledge);
    return this.incidentMasterRepo.update({ _id: incidentId  }, { developer: userId });
  }

  async resolvedincident(incidentId: string, userId: string): Promise<IncidentMaster> {
    const detail = await this.createIncidentDetail(incidentId, userId, IncidentStatus.Resolved);
    return this.incidentMasterRepo.update({ _id: incidentId }, { state: IncidentStatus.Resolved });
  }

  async deleteincident(incidentId: string): Promise<boolean> {
    return this.incidentMasterRepo.delete({ _id: incidentId  });
  }

  async createIncidentDetail(incidentId: string, userId: string, incidentStatus: IncidentStatus): Promise<IncidentDetail> {
    if (incidentStatus > 1 && incidentStatus in IncidentStatus) {
      return this.incidentDetailRepo.create({
        masterId: incidentId,
        userId: userId,
        action: incidentStatus,
        dateCreated: new Date(),
        dateModified: new Date()       
      });
    }
  }
}