describe('', function() {

  let javabuzz

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('multiples of 3', function() {

    it('javas for 3', function() {
      expect(javabuzz.play(3)).toEqual('Java');
    });

    it('javas for 6', function() {
      expect(javabuzz.play(6)).toEqual('Java');
    });
  });

  describe('multiples of 5', function() {

    it('buzzes for 5', function() {
      expect(javabuzz.play(5)).toEqual('Buzz');
    });
    
    it('buzzes for 10', function() {
      expect(javabuzz.play(10)).toEqual('Buzz');
    });
  });

  describe('multiples of 15', function() {

    it('javabuzzes for 15', function() {
      expect(javabuzz.play(15)).toEqual('JavaBuzz');
    });
    
    it('javabuzzes for 30', function() {
      expect(javabuzz.play(30)).toEqual('JavaBuzz');
    });
  });
  
});