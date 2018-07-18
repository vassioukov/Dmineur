import { AskCheckModule } from './ask-check.module';

describe('AskCheckModule', () => {
  let askCheckModule: AskCheckModule;

  beforeEach(() => {
    askCheckModule = new AskCheckModule();
  });

  it('should create an instance', () => {
    expect(askCheckModule).toBeTruthy();
  });
});
