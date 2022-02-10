import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/repos/entity.repository';
import { IncidentDetailDocument, IncidentMaster, IncidentDetail, IncidentMasterDocument } from 'src/schema/incident.schema';

// for incident master
@Injectable()
export class IncidentMasterRepository extends EntityRepository<IncidentMasterDocument> {
  constructor(@InjectModel(IncidentMaster.name) incidentm: Model<IncidentMasterDocument>) {
    super(incidentm);
  }
}

// for incident detail
@Injectable()
export class IncidentDetailRepository extends EntityRepository<IncidentDetailDocument> {
  constructor(@InjectModel(IncidentDetail.name) incidentd: Model<IncidentDetailDocument>) {
    super(incidentd);
  }
}
