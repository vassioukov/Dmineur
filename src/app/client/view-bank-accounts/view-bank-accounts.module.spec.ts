import { ViewBankAccountsModule } from './view-bank-accounts.module';

describe('ViewBankAccountsModule', () => {
  let viewBankAccountsModule: ViewBankAccountsModule;

  beforeEach(() => {
    viewBankAccountsModule = new ViewBankAccountsModule();
  });

  it('should create an instance', () => {
    expect(viewBankAccountsModule).toBeTruthy();
  });
});
