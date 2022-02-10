import { Injectable } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

@Injectable()
export class IncidentMasterModel {
    constructor() {
        this.dateCreated = new Date();
        this.dateModified = new Date();
    }

    @ApiProperty()
    incidentId: string;

    @ApiProperty()
    title: string;
  
    @ApiProperty()
    description: string;
  
    @ApiProperty()
    expectedBehavior: string;
    
    @ApiProperty()
    state: string;
  
    @ApiProperty()
    reason: string;
  
    @ApiProperty()
    foundInVersion: string;
  
    @ApiProperty()
    developer: string;
  
    @ApiProperty()
    tester: string;

    @ApiProperty()
    assignedTo: string;
  
    @ApiProperty()
    incidentType: string;
  
    @ApiProperty()
    dateCreated: Date;
  
    @ApiProperty()
    dateModified: Date;
  
    @ApiProperty()
    createdBy: string;
  
    @ApiProperty()
    modifiedBy: string;
  }
  
  @Injectable()
  export class IncidentDetailModel {
    constructor() {
        this.dateCreated = new Date();
        this.dateModified = new Date();
    }

    @ApiProperty()
    masterId: string;
  
    @ApiProperty()
    userId: string;
  
    @ApiProperty()
    discussion: string;

    @ApiProperty()
    action: string;
  
    @ApiProperty()
    dateCreated: Date;
  
    @ApiProperty()
    dateModified: Date;
  
    @ApiProperty()
    createdBy: string;
  
    @ApiProperty()
    modifiedBy: string;
  }