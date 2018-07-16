import { BankAccountValidationModule } from './bank-account-validation.module';

describe('BankAccountValidationModule', () => {
  let bankAccountValidationModule: BankAccountValidationModule;

  beforeEach(() => {
    bankAccountValidationModule = new BankAccountValidationModule();
  });

  it('should create an instance', () => {
    expect(bankAccountValidationModule).toBeTruthy();
  });
});
