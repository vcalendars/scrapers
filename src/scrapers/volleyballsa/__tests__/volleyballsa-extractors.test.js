const extractor = require('../volleyballsa-extractors');
const testData = require('./volleyballsa-extractors.data');

describe('volleyballsa', () => {
  describe('extractors', () => {
    describe('extractDateFromTr', () => {
      it('Should extract match date from social tr', () => {
        const tr = `
          <tr class="result">
            <td class="team-schedule__date">Wednesday, Jan 22</td>
            <td class="team-schedule__time">18:45pm</td>
          </tr>
        `;
        const timezone = 'Australia/Adelaide';

        const expected = new Date('2020-01-22T08:15:00.000Z');

        const actual = extractor.extractDateFromTr(tr, timezone);

        expect(actual).toEqual(expected);
      });
      it('Should extract match date from state league tr', () => {
        const tr = `
          <tr class="result">
            <td class="team-schedule__date">Saturday, Jul 4</td>
            <td class="team-schedule__time">09:20am</td>
          </tr>
        `;
        const timezone = 'Australia/Adelaide';

        const expected = new Date('2020-07-03T23:50:00.000Z');

        const actual = extractor.extractDateFromTr(tr, timezone);

        expect(actual).toEqual(expected);
      });
    });
    describe('extractTeamNamesFromTr', () => {
      it('Should extract team names from social tr', () => {
        const tr = `
          <tr class="result">
            <td class="team-schedule__versus">
              <b>Won Direction</b> <span>v</span> <b>2nd Game Anyone?</b>
            </td>
            <td class="team-schedule__duty"></td>
          </tr>
        `;

        const expected = {
          home: { name: 'Won Direction' },
          away: { name: '2nd Game Anyone?' },
          duty: undefined,
        };

        const actual = extractor.extractTeamsFromTr(tr);

        expect(actual).toEqual(expected);
      });
      it('Should extract team names from state league tr', () => {
        const tr = `
        <tr class="result">
          <td class="team-schedule__versus">
            <b><a href="#duty-21476-3335" onclick="document.getElementById('duty-21476-3335').classList.toggle('hidden');return false">HENLEY</a></b> <span>v</span> <b>AUSTRAL</b>
            <div id="duty-21476-3335" class="hidden" style="border:1px solid #ccc;padding:0.5em;background:white">
              <small>
                <b>HENLEY Duty:</b>
                <br>
                <span>
                  11:20am Mt Lofty Community Centre / Court 1
                  <br>
                  HENLEY v AUSTRAL
                </span>
                <br>
              </small>
            </div>
          </td>
          <td class="team-schedule__duty">MEN / LM / AUSTRAL</td>
        </tr>
        `;

        const expected = {
          home: { name: 'HENLEY' },
          away: { name: 'AUSTRAL' },
          duty: undefined,
        };

        const actual = extractor.extractTeamsFromTr(tr);

        expect(actual).toEqual(expected);
      });
    });
    describe('extractVenueFromTr', () => {
      it('Should extract venue from social tr', () => {
        const tr = `
          <tr class="result">
            <td class="team-schedule__venue">Port Noarlunga / Court 1</td>
          </tr>
        `;

        const expected = 'Port Noarlunga';

        const actual = extractor.extractVenueFromTr(tr);

        expect(actual).toEqual(expected);
      });
      it('Should extract venue from state league tr', () => {
        const tr = `
          <tr class="result">
            <td class="team-schedule__venue">Mt Lofty Community Centre / Court 1</td>
          </tr>
        `;

        const expected = 'Mt Lofty Community Centre';

        const actual = extractor.extractVenueFromTr(tr);

        expect(actual).toEqual(expected);
      });
    });
    describe('extractCourtFromTr', () => {
      it('Should extract court from social tr', () => {
        const tr = `
          <tr class="result">
            <td class="team-schedule__venue">Port Noarlunga / Court 1</td>
          </tr>
        `;

        const expected = 'Court 1';

        const actual = extractor.extractCourtFromTr(tr);

        expect(actual).toEqual(expected);
      });
      it('Should extract court from social tr', () => {
        const tr = `
          <tr class="result">
            <td class="team-schedule__venue">Mt Lofty Community Centre / Court 1</td>
          </tr>
        `;

        const expected = 'Court 1';

        const actual = extractor.extractCourtFromTr(tr);

        expect(actual).toEqual(expected);
      });
    });
    describe('extractGradesFromPage', () => {
      it('Should extract grades from social page', () => {
        const expected = [
          { id: 414, name: 'Henley / A' },
          { id: 415, name: 'Pt Noarlunga / A' },
        ];

        const actual = extractor.extractGradesFromPage(testData.socialBasePage);

        expect(actual).toEqual(expected);
      });
    });
  });
});
