import { AddCompteModule } from './add-compte.module';

describe('AddCompteModule', () => {
  let addCompteModule: AddCompteModule;

  beforeEach(() => {
    addCompteModule = new AddCompteModule();
  });

  it('should create an instance', () => {
    expect(addCompteModule).toBeTruthy();
  });
});
