import { ConsultCompteModule } from './consult-compte.module';

describe('ConsultCompteModule', () => {
  let consultCompteModule: ConsultCompteModule;

  beforeEach(() => {
    consultCompteModule = new ConsultCompteModule();
  });

  it('should create an instance', () => {
    expect(consultCompteModule).toBeTruthy();
  });
});
