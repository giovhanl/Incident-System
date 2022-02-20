import { Test, TestingModule } from '@nestjs/testing';
import { IncidentsService } from '../service/incidents.service';
import { IncidentsController } from './incidents.controller';

describe('IncidentsController', () => {
  let controller: IncidentsController;

  const mock_IncidentsService = {
    addIncident: jest.fn((dto) => {
      return {
        id: Date.now().toString(),
        dateCreated: Date.now,
        dateModified: Date.now,
        ...dto,
      };
    }),
    assignIncident: jest.fn((dto) => {
      return {
        id: Date.now().toString(),
        ...dto,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncidentsController],
      providers: [IncidentsService],
    })
      .overrideProvider(IncidentsService)
      .useValue(mock_IncidentsService)
      .compile();

    controller = module.get<IncidentsController>(IncidentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should add new incident', () => {
    expect(
      controller.addIncident({
        title: 'a bug found',
        description: 'a bug found',
        expectedBehavior: 'a bug found',
        state: 'a bug found',
        reason: 'a bug found',
        foundInVersion: '1.1.1.222',
        developer: 'gio',
        tester: 'gio',
        assignedTo: '343434',
        incidentType: 'sdfasdf',
        incidentId: '',
        createdBy: '',
        modifiedBy: '',
        dateCreated: undefined,
        dateModified: undefined,
      }),
    ).toEqual({
      id: expect.any(String),
      title: 'a bug found',
      description: 'a bug found',
      expectedBehavior: 'a bug found',
      state: 'a bug found',
      reason: 'a bug found',
      foundInVersion: '1.1.1.222',
      developer: 'gio',
      tester: 'gio',
      assignedTo: '343434',
      incidentType: 'sdfasdf',
      incidentId: '',
      createdBy: '',
      modifiedBy: '',
      dateCreated: undefined,
      dateModified: undefined,
    });

    expect(mock_IncidentsService.addIncident).toHaveBeenCalled();
  });

  it('should assing incident to user', () => {
    expect(
      controller.assignIncident({
        incidentId: '11111',
        userId: '3333',
      }),
    ).toEqual({
      id: expect.any(String),
      incidentId: '11111',
      userId: '3333',
    });

    expect(mock_IncidentsService.addIncident).toHaveBeenCalled();
  });
});
