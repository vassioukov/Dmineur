import { RequestByAgentModule } from './request-by-agent.module';

describe('RequestByAgentModule', () => {
  let requestByAgentModule: RequestByAgentModule;

  beforeEach(() => {
    requestByAgentModule = new RequestByAgentModule();
  });

  it('should create an instance', () => {
    expect(requestByAgentModule).toBeTruthy();
  });
});
