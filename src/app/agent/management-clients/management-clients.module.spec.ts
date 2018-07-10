import { ManagementClientsByAgentsModule } from './management-clients.module';

describe('ManagementClientsByAgentsModule', () => {
  let managementClientsByAgentsModule: ManagementClientsByAgentsModule;

  beforeEach(() => {
    managementClientsByAgentsModule = new ManagementClientsByAgentsModule();
  });

  it('should create an instance', () => {
    expect(managementClientsByAgentsModule).toBeTruthy();
  });
});
