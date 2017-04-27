//Reference URL for Chai http://chaijs.com/api/bdd/

const expect = require('chai').expect;
import { Korean } from '../src/korean';

describe('Korean', () => {
  describe('Present Tense', () => {
    it('should conjugate 하다 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('하다', {tense: 'present'});
      expect(presentWord).to.equal('해');

      presentWord = kc.conjugate('좋아하다', {tense: 'present'});
      expect(presentWord).to.equal('좋아해');

      presentWord = kc.conjugate('필요하다', {tense: 'present'});
      expect(presentWord).to.equal('필요해');

      presentWord = kc.conjugate('약속하다', {tense: 'present'});
      expect(presentWord).to.equal('약속해');

      presentWord = kc.conjugate('걱정하다', {tense: 'present'});
      expect(presentWord).to.equal('걱정해');

      presentWord = kc.conjugate('그만하다', {tense: 'present'});
      expect(presentWord).to.equal('그만해');
    });
    it('should conjugate 오다 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('오다', {tense: 'present'});
      expect(presentWord).to.equal('와');

      presentWord = kc.conjugate('들어오다', {tense: 'present'});
      expect(presentWord).to.equal('들어와');

      presentWord = kc.conjugate('보다', {tense: 'present'});
      expect(presentWord).to.equal('봐');

      presentWord = kc.conjugate('쏘다', {tense: 'present'});
      expect(presentWord).to.equal('쏴');

      presentWord = kc.conjugate('해보다', {tense: 'present'});
      expect(presentWord).to.equal('해봐');
    });
    it('should conjugate 우다 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('우다', {tense: 'present'});
      expect(presentWord).to.equal('워');

      presentWord = kc.conjugate('춤추다', {tense: 'present'});
      expect(presentWord).to.equal('춤춰');

      presentWord = kc.conjugate('도와주다', {tense: 'present'});
      expect(presentWord).to.equal('도와줘');

      presentWord = kc.conjugate('외우다', {tense: 'present'});
      expect(presentWord).to.equal('외워');

      presentWord = kc.conjugate('싸우다', {tense: 'present'});
      expect(presentWord).to.equal('싸워');

      presentWord = kc.conjugate('바꾸다', {tense: 'present'});
      expect(presentWord).to.equal('바꿔');
    });
    it('should conjugate 으다 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('으다', {tense: 'present'});
      expect(presentWord).to.equal('어');

      presentWord = kc.conjugate('쓰다', {tense: 'present'});
      expect(presentWord).to.equal('써');
    });
    it('should conjugate 이다 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('이다', {tense: 'present'});
      expect(presentWord).to.equal('여');

      presentWord = kc.conjugate('우기다', {tense: 'present'});
      expect(presentWord).to.equal('우겨');

      presentWord = kc.conjugate('지다', {tense: 'present'});
      expect(presentWord).to.equal('져');
    });
    it('should conjugate ㅏ다,ㅐ다,ㅓ다 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('자다', {tense: 'present'});
      expect(presentWord).to.equal('자');

      presentWord = kc.conjugate('내다', {tense: 'present'});
      expect(presentWord).to.equal('내');

      presentWord = kc.conjugate('서다', {tense: 'present'});
      expect(presentWord).to.equal('서');
    });

    // Will fail until Issue #12 is resolved.
    it('should conjugate ㅗ르 and ㅜ르 words correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('모르다', {tense: 'present'});
      expect(presentWord).to.equal('몰라');

      presentWord = kc.conjugate('부르다', {tense: 'present'});
      expect(presentWord).to.equal('불러');

      presentWord = kc.conjugate('서두르다', {tense: 'present'});
      presentWord = kc.conjugate('서둘러', {tense: 'present'});
    });
  });
  describe('Future Tense', () => {
    it('should conjugate verbs with stem ending with a vowel correctly', () => {
      const kc = new Korean();
      let futureWord = kc.conjugate('하다', {tense: 'future'});
      expect(futureWord).to.equal('할 거야');

      futureWord = kc.conjugate('오다', {tense: 'future'});
      expect(futureWord).to.equal('올 거야');

      futureWord = kc.conjugate('비다', {tense: 'future'});
      expect(futureWord).to.equal('빌 거야');
    });
    it('should conjugate verbs with stem ending with a ㄹ consonant correctly', () => {
      const kc = new Korean();
      let futureWord = kc.conjugate('놀다', {tense: 'future'});
      expect(futureWord).to.equal('놀 거야');

      futureWord = kc.conjugate('날다', {tense: 'future'});
      expect(futureWord).to.equal('날 거야');

      futureWord = kc.conjugate('울다', {tense: 'future'});
      expect(futureWord).to.equal('울 거야');
    });
    it('should conjugate verbs with stem ending with ㅂ consonant correctly', () => {
      const kc = new Korean();
      let futureWord = kc.conjugate('춥다', {tense: 'future'});
      expect(futureWord).to.equal('추울 거야');

      futureWord = kc.conjugate('덥다', {tense: 'future'});
      expect(futureWord).to.equal('더울 거야');
    });
    it('should conjugate verbs with stem ending with other consonants correctly', () => {
      const kc = new Korean();
      let futureWord = kc.conjugate('있다', {tense: 'future'});
      expect(futureWord).to.equal('있을 거야');

      futureWord = kc.conjugate('먹다', {tense: 'future'});
      expect(futureWord).to.equal('먹을 거야');
    });
  });

  describe('Present Continuous Tense', () => {
    it('should conjugate verbs correctly', () => {
      const kc = new Korean();
      let presentWord = kc.conjugate('하다', {tense: 'PresentContinuous'});
      expect(presentWord).to.equal('하고있어');

      presentWord = kc.conjugate('오다', {tense: 'PresentContinuous'});
      expect(presentWord).to.equal('오고있어');

      presentWord = kc.conjugate('비다', {tense: 'PresentContinuous'});
      expect(presentWord).to.equal('비고있어');

      presentWord = kc.conjugate('먹다', {tense: 'PresentContinuous'});
      expect(presentWord).to.equal('먹고있어');

      presentWord = kc.conjugate('좋아하다', {tense: 'PresentContinuous'});
      expect(presentWord).to.equal('좋아하고있어');
    });
  });

  describe('Past Tense', () => {
    it('should conjugate 하다 verbs correctly', () => {
      const kc = new Korean();
      let pastWord = kc.conjugate('하다', { tense: 'past' });
      expect(pastWord).to.equal('했어');

      pastWord = kc.conjugate('좋아하다', {tense: 'past'});
      expect(pastWord).to.equal('좋아했어');
    });
    it('should conjugate ㅗ다 words correctly', () => {
      const kc = new Korean();
      let pastWord = kc.conjugate('오다', {tense: 'past'});
      expect(pastWord).to.equal('왔어');

      pastWord = kc.conjugate('보다', {tense: 'past'});
      expect(pastWord).to.equal('봤어');
    });
    it('should conjugate ㅜ다 words correctly', () => {
      const kc = new Korean();
      let pastWord = kc.conjugate('춤추다', {tense: 'past'});
      expect(pastWord).to.equal('춤췄어');

      pastWord = kc.conjugate('도와주다', {tense: 'past'});
      expect(pastWord).to.equal('도와줬어');
    });
    it('should conjugate ㅡ다 words correctly', () => {
      const kc = new Korean();
      let pastWord = kc.conjugate('쓰다', {tense: 'past'});
      expect(pastWord).to.equal('썼어');
    });
    it('should conjugate ㅣ다 words correctly', () => {
      const kc = new Korean();
      let pastWord = kc.conjugate('우기다', {tense: 'past'});
      expect(pastWord).to.equal('우겼어');

      pastWord = kc.conjugate('지다', {tense: 'past'});
      expect(pastWord).to.equal('졌어');
    });
    it('should conjugate ㅗ르 and ㅜ르 words correctly', () => {
      const kc = new Korean();
      let pastWord = kc.conjugate('모르다', {tense: 'past'});
      expect(pastWord).to.equal('몰랐어');

      pastWord = kc.conjugate('부르다', {tense: 'past'});
      expect(pastWord).to.equal('불렀어');
    });
      it('should conjugate words with ㅗㄹ and ㅏㄹ final vowel correctly', () => {
      const kc = new Korean();
      let pastWord = kc.conjugate('놀다', {tense: 'past'});
      expect(pastWord).to.equal('놀았어');

      pastWord = kc.conjugate('날다', {tense: 'past'});
      expect(pastWord).to.equal('날았어');
    });
    it('should conjugate words with ㅗㄱ and ㅏㄱ final vowel correctly', () => {
      const kc = new Korean();
      let pastWord = kc.conjugate('녹다', {tense: 'past'});
      expect(pastWord).to.equal('녹았어');

      pastWord = kc.conjugate('막다', {tense: 'past'});
      expect(pastWord).to.equal('막았어');
    });
    it('should conjugate words with ㅜㄹ, ㅓㄹ, and ㅡㄹ final vowel correctly', () => {
      const kc = new Korean();
      let pastWord = kc.conjugate('울다', {tense: 'past'});
      expect(pastWord).to.equal('울었어');

      pastWord = kc.conjugate('얼다', {tense: 'past'});
      expect(pastWord).to.equal('얼었어');

      pastWord = kc.conjugate('늘다', {tense: 'past'});
      expect(pastWord).to.equal('늘었어');
    });
    it('should conjugate words with ㅜㄱ, ㅓㄱ, and ㅡㄱ final vowel correctly', () => {
      const kc = new Korean();
      let pastWord = kc.conjugate('죽다', {tense: 'past'});
      expect(pastWord).to.equal('죽었어');

      pastWord = kc.conjugate('먹다', {tense: 'past'});
      expect(pastWord).to.equal('먹었어');
    });
    it('should conjugate words with ㅂ다 words correctly', () => {
      const kc = new Korean();
      let pastWord = kc.conjugate('춥다', {tense: 'past'});
      expect(pastWord).to.equal('추웠어');

      pastWord = kc.conjugate('덥다', {tense: 'past'});
      expect(pastWord).to.equal('더웠어');
    });
    it('should conjugate words with 있다 words correctly', () => {
      const kc = new Korean();
      let pastWord = kc.conjugate('있다', {tense: 'past'});
      expect(pastWord).to.equal('있었어');
    });
  });
});
