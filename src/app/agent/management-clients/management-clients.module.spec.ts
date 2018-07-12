import { ManagementClientsByAgentModule } from './management-clients.module';

describe('ManagementClientsByAgentModule', () => {
  let managementClientsByAgentModule: ManagementClientsByAgentModule;

  beforeEach(() => {
    managementClientsByAgentModule = new ManagementClientsByAgentModule();
  });

  it('should create an instance', () => {
    expect(managementClientsByAgentModule).toBeTruthy();
  });
});
