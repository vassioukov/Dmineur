import { ManagementAgentsModule } from './management-agents.module';

describe('ManagementAgentsModule', () => {
  let managementAgentsModule: ManagementAgentsModule;

  beforeEach(() => {
    managementAgentsModule = new ManagementAgentsModule();
  });

  it('should create an instance', () => {
    expect(managementAgentsModule).toBeTruthy();
  });
});
