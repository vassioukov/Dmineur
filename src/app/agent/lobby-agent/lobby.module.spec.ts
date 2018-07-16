import { LobbyAgentModule } from './lobby.module';

describe('LobbyAgentModule', () => {
  let lobbyModule: LobbyAgentModule;

  beforeEach(() => {
    lobbyModule = new LobbyAgentModule();
  });

  it('should create an instance', () => {
    expect(lobbyModule).toBeTruthy();
  });
});
