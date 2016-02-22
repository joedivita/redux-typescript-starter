import { expect, assert } from 'chai';
import { exec } from 'child_process';

describe('Typescript linter', () => {
  it('files contain proper style', (done) => {
    exec('tslint "./src/**/*.@(ts|tsx)"', (error, stdout, stderr) => {
      const lintErrors = stdout;
      if (lintErrors.length > 0) {
        const errors = lintErrors.toString().split('\n');
        const formatedErrorsArray = errors.map((error) => {
          return '\t' + error;
        });
        const formatedErrors = '\n\n' + formatedErrorsArray.join('\n');
        expect.fail(null, null, formatedErrors);
      }
      else {
        assert.ok(true);
      }
      done();
    });
  });
});
