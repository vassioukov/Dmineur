import { ManagementClientsByAgentModule } from './management-clients.module';

describe('ManagementsClientsByAgentModule', () => {
  let managementClientsModule: ManagementClientsByAgentModule;

  beforeEach(() => {
    managementClientsModule = new ManagementClientsByAgentModule();
  });

  it('should create an instance', () => {
    expect(managementClientsModule).toBeTruthy();
  });
});
