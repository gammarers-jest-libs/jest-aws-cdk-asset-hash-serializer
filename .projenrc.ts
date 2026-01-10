import { typescript, javascript } from 'projen';
const project = new typescript.TypeScriptProject({
  authorName: 'yicr',
  authorEmail: 'yicr@users.noreply.github.com',
  defaultReleaseBranch: 'main',
  name: 'jest-aws-cdk-asset-hash-serializer',
  projenrcTs: true,
  repository: 'https://github.com/gammarers-jest-libs/jest-aws-cdk-asset-hash-serializer.git',
  keywords: ['aws', 'cdk', 'aws-cdk', 'jest', 'asset'],
  description: 'this package is aws cdk construct asset filename replacer(RandomString.zip to HASH.zip)',
  releaseToNpm: false,
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '24.x',
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();