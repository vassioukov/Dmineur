import { ManagementsClientsModule } from './managements-clients.module';

describe('ManagementsClientsModule', () => {
  let managementsClientsModule: ManagementsClientsModule;

  beforeEach(() => {
    managementsClientsModule = new ManagementsClientsModule();
  });

  it('should create an instance', () => {
    expect(managementsClientsModule).toBeTruthy();
  });
});
