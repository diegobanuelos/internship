const WordExtractor = require('./wordExtractor.js');
const {get} = require('axios');


const fileList = [
  'https://raw.githubusercontent.com/axios/axios/v1.x/LICENSE',
  'https://raw.githubusercontent.com/lodash/lodash/master/LICENSE',
  'https://raw.githubusercontent.com/moment/moment/develop/LICENSE',  
]

const finalTopWords = [];
// download an process al the files...
fileList.map(file=>{
    get(file).then(res=>{
        const rawFile = res.data;
        console.log('File downloaded:', file);
        console.log ('Raw file:',rawFile);
        const extractor = new WordExtractor();    
        const wordList = extractor.run(rawFile);  
        finalTopWords.push(...wordList)        
    })
})
// TODO: Sort the world list
// TODO: print the final top 10
console.log('wordList',finalTopWords);







