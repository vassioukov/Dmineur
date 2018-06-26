import { AssignmentRequestModule } from './assignment-request.module';

describe('AssignmentRequestModule', () => {
  let assignmentRequestModule: AssignmentRequestModule;

  beforeEach(() => {
    assignmentRequestModule = new AssignmentRequestModule();
  });

  it('should create an instance', () => {
    expect(assignmentRequestModule).toBeTruthy();
  });
});
