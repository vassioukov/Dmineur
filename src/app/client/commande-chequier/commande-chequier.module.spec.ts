import { CommandeChequierModule } from './commande-chequier.module';

describe('CommandeChequierModule', () => {
  let commandeChequierModule: CommandeChequierModule;

  beforeEach(() => {
    commandeChequierModule = new CommandeChequierModule();
  });

  it('should create an instance', () => {
    expect(commandeChequierModule).toBeTruthy();
  });
});
