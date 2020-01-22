const sinon = require('sinon');
const axios = require('axios');
const rxjsOperators = require('rxjs/operators');

const extractors = require('../volleyballsa-extractors');
const collectors = require('../volleyballsa-collectors');

describe('volleyballsa', () => {
  describe('collectors', () => {
    afterEach(() => {
      sinon.restore();
    });
    describe('collectGrades', () => {
      it('must get the page using axios and extract the grades with an extractor', async () => {
        const baseUrl = 'http://test-url.com';
        const htmlData = '<html></html>';
        const expected = [
          {
            name: 'Test Grade',
            id: 5,
          },
        ];

        sinon.stub(axios, 'get').resolves({ data: htmlData });
        sinon.stub(extractors, 'extractGradesFromPage').returns(expected);

        const result = await collectors
          .collectGrades(baseUrl)
          .pipe(rxjsOperators.toArray())
          .toPromise();

        sinon.assert.calledOnce(extractors.extractGradesFromPage);
        sinon.assert.calledWithExactly(
          extractors.extractGradesFromPage,
          htmlData,
        );

        expect(result).toEqual(expected);
      });
    });
  });
});
