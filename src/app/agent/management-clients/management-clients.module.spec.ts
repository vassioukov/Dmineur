import { ManagementClientsModule } from './management-clients.module';

describe('ManagementClientsModule', () => {
  let managementClientsModule: ManagementClientsModule;

  beforeEach(() => {
    managementClientsModule = new ManagementClientsModule();
  });

  it('should create an instance', () => {
    expect(managementClientsModule).toBeTruthy();
  });
});
