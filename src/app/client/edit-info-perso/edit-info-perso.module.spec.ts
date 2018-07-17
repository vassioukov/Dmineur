import { EditInfoPersoModule } from './edit-info-perso.module';

describe('EditInfoPersoModule', () => {
  let editInfoPersoModule: EditInfoPersoModule;

  beforeEach(() => {
    editInfoPersoModule = new EditInfoPersoModule();
  });

  it('should create an instance', () => {
    expect(editInfoPersoModule).toBeTruthy();
  });
});
