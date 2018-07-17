import { NewUserModule } from './new-user.module';

describe('NewUserModule', () => {
  let newUserModule: NewUserModule;

  beforeEach(() => {
    newUserModule = new NewUserModule();
  });

  it('should create an instance', () => {
    expect(newUserModule).toBeTruthy();
  });
});
