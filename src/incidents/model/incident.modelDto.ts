import { Injectable } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

@Injectable()
export class IncidentMasterDto {
    constructor() {
        this.dateCreated = new Date();
        this.dateModified = new Date();
    }

    @ApiProperty()
    incidentId: string;

    @ApiProperty()
    @IsNotEmpty()
    title: string;
  
    @ApiProperty()
    @IsNotEmpty()
    description: string;
  
    @ApiProperty()
    expectedBehavior: string;
    
    @ApiProperty()
    @IsNotEmpty()
    state: string;
  
    @ApiProperty()
    reason: string;
  
    @ApiProperty()
    foundInVersion: string;
  
    @ApiProperty()
    @IsNotEmpty()
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
  export class IncidentDetailDto {
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