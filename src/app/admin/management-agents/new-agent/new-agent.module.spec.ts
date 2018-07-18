import { NewAgentModule } from './new-agent.module';

describe('NewAgentModule', () => {
  let newAgentModule: NewAgentModule;

  beforeEach(() => {
    newAgentModule = new NewAgentModule();
  });

  it('should create an instance', () => {
    expect(newAgentModule).toBeTruthy();
  });
});
