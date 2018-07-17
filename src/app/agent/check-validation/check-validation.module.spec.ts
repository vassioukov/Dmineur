import { CheckValidationModule } from './check-validation.module';

describe('CheckValidationModule', () => {
  let checkValidationModule: CheckValidationModule;

  beforeEach(() => {
    checkValidationModule = new CheckValidationModule();
  });

  it('should create an instance', () => {
    expect(checkValidationModule).toBeTruthy();
  });
});
