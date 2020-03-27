const generateUniqueId = require('../../src/utils/generateUniqueId');

decribe('Generate Unique ID', ()=>{
  it('should generate an unique ID', ()=>{
    const id = generateUniqueId();

    expect(id).toHaveLenght(8);
  })
})