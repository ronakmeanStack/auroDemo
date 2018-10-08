import { ResearcherModule } from './researcher.module';

describe('ResearcherModule', () => {
  let researcherModule: ResearcherModule;

  beforeEach(() => {
    researcherModule = new ResearcherModule();
  });

  it('should create an instance', () => {
    expect(researcherModule).toBeTruthy();
  });
});
