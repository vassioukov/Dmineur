import { ManagementClientsByAdminModule } from './management-clients.module';

describe('ManagementsClientsByAgentModule', () => {
  let managementClientsByAdminModule: ManagementClientsByAdminModule;

  beforeEach(() => {
    managementClientsByAdminModule = new ManagementClientsByAdminModule();
  });

  it('should create an instance', () => {
    expect(managementClientsByAdminModule).toBeTruthy();
  });
});
