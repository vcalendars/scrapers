const extractor = require('../volleyballsa-extractors');

const TEST_ROW = `
<tr class="result">
  <td class="team-schedule__date">Wednesday, Jan 22</td>
  <td class="team-schedule__versus">
    <b>Won Direction</b> <span>v</span> <b>2nd Game Anyone?</b>
  </td>
  <td class="team-schedule__duty"></td>
  <td class="team-schedule__venue">Port Noarlunga / Court 1</td>
  <td class="team-schedule__time">18:45pm</td>
</tr>
`;

describe('extractors', () => {
  describe('volleyballsa', () => {
    describe('extractDateFromTr', () => {
      it('Should extract match date from tr', () => {
        const tr = `
          <tr class="result">
            <td class="team-schedule__date">Wednesday, Jan 22</td>
            <td class="team-schedule__time">18:45pm</td>
          </tr>
        `;

        const expected = new Date('2020-01-22T08:15:00.000Z');

        const actual = extractor.extractDateFromTr(tr);

        expect(actual).toEqual(expected);
      });
    });
    describe('extractTeamNamesFromTr', () => {
      it('Should extract team names from tr', () => {
        const tr = `
          <tr class="result">
            <td class="team-schedule__versus">
              <b>Won Direction</b> <span>v</span> <b>2nd Game Anyone?</b>
            </td>
            <td class="team-schedule__duty"></td>
          </tr>
        `;

        const expected = {
          home: "Won Direction",
          away: "2nd Game Anyone?",
          duty: "",
        };

        const actual = extractor.extractTeamNamesFromTr(tr);

        expect(actual).toEqual(expected);
      });
    });
    describe('extractVenueFromTr', () => {
      it('Should extract venue from tr', () => {
        const tr = `
          <tr class="result">
            <td class="team-schedule__venue">Port Noarlunga / Court 1</td>
          </tr>
        `;

        const expected = 'Port Noarlunga';

        const actual = extractor.extractVenueFromTr(tr);

        expect(actual).toEqual(expected);
      });
    });
    describe('extractCourtFromTr', () => {
      it('Should extract court from tr', () => {
        const tr = `
          <tr class="result">
            <td class="team-schedule__venue">Port Noarlunga / Court 1</td>
          </tr>
        `;

        const expected = 'Court 1';

        const actual = extractor.extractCourtFromTr(tr);

        expect(actual).toEqual(expected);
      });
    });
  });
});