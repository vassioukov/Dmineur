import { ThriftModule } from './thrift.module';

describe('ThriftModule', () => {
  let thriftModule: ThriftModule;

  beforeEach(() => {
    thriftModule = new ThriftModule();
  });

  it('should create an instance', () => {
    expect(thriftModule).toBeTruthy();
  });
});
