const WordExtractor = require('./wordExtractor.js');

test('WordExtractor', ()=>{
    const extractor = new WordExtractor();
    expect(extractor.words).toEqual([]);

})