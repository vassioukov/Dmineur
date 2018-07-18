import { RequestByClientModule } from './request-by-client.module';

describe('RequestByClientModule', () => {
  let requestByClientModule: RequestByClientModule;

  beforeEach(() => {
    requestByClientModule = new RequestByClientModule();
  });

  it('should create an instance', () => {
    expect(requestByClientModule).toBeTruthy();
  });
});
