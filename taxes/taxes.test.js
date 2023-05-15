describe('calculateTaxes test', function(){
    it('should calculate the high tax bracket', function(){
        expect(calculateTaxes(50000)).toEqual(12500);
        expect(calculateTaxes(100000)).toEqual(25000);
    })
    it('should calculate the low tax bracket', function(){
        expect(calculateTaxes(10000)).toEqual(1500);
        expect(calculateTaxes(1000)).toEqual(150);
        expect(calculateTaxes(0)).toEqual(0);
    })
})

describe('removeDupes test', function(){
    it ('should removes duplicates from an array', function(){
        expect(removesDupes([1,1,2,2,3,4])).toEqual([1,2,3,4])
        expect(removesDupes([1,2,3,4])).toEqual([1,2,3,4])
        // expect(removesDupes([1,2,3,4])).toBeInstanceOf(Array);
    
    })
    it ('should removes duplicates from an array', function(){
        expect(removesDupes('hello')).toEqual('helo')
        // expect(removesDupes('hello')).toBeInstanceOf(String);
    })
})

describe('submitForm() test', () => {
    it('saves input val to usernames array', () => {
    input.value = 'I heart cats';
    submitForm();
    expect(usernames.length).toBe(1);
    // expect(usernames).toContain('chickenGal')
  })
})
afterEach(function(){
    input.value = '';
    username = [];
})

beforeEach(() => {
    console.log("BEFORE")
})
beforeAll(() => {
    console.log("BEFORE ALL")
})