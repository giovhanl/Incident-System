import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IncidentMasterDocument = IncidentMaster & Document;
export type IncidentDetailDocument = IncidentDetail & Document;
@Schema()
export class IncidentMaster {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  expectedBehavior: string;
  
  @Prop()
  state: string;

  @Prop()
  reason: string;

  @Prop()
  foundInVersion: string;

  @Prop()
  developer: string;

  @Prop()
  tester: string;

  @Prop()
  assignedTo: string;

  @Prop()
  incidentType: string;

  @Prop()
  dateCreated: Date;

  @Prop()
  dateModified: Date;

  @Prop()
  createdBy: string;

  @Prop()
  modifiedBy: string;
}



@Schema()
export class IncidentDetail {
  @Prop()
  masterId: string;

  @Prop()
  userId: string;

  @Prop()
  discussion: string;

  @Prop()
  action: string;

  @Prop()
  dateCreated: Date;

  @Prop()
  dateModified: Date;

  @Prop()
  createdBy: string;

  @Prop()
  modifiedBy: string;
}

export const IncidentMasterSchema = SchemaFactory.createForClass(IncidentMaster);
export const IncidentDetailSchema = SchemaFactory.createForClass(IncidentDetail);
