import { ManagementsClientsByAgentModule } from './managements-clients.module';

describe('ManagementsClientsByAgentModule', () => {
  let managementsClientsModule: ManagementsClientsByAgentModule;

  beforeEach(() => {
    managementsClientsModule = new ManagementsClientsByAgentModule();
  });

  it('should create an instance', () => {
    expect(managementsClientsModule).toBeTruthy();
  });
});
