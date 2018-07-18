import { EditAccountModule } from './edit-account.module';

describe('EditAccountModule', () => {
  let editAccountModule: EditAccountModule;

  beforeEach(() => {
    editAccountModule = new EditAccountModule();
  });

  it('should create an instance', () => {
    expect(editAccountModule).toBeTruthy();
  });
});
