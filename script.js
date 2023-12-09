const whaleTalk = () => {
    let input = document.getElementById('input-text').value;
    input = input.toLowerCase();
    const vowels = ['a', 'e', 'u', 'o', 'i'];
    const resultArray = [];

    for(let i = 0; i < input.length; i++) {

        if(input[i] === 'e') {
            resultArray.push(input[i]);
        }
         if(input[i] === 'u') {
         resultArray.push(input[i]);
         }

        for(let j = 0; j < vowels.length; j++) {
            if (input[i] === vowels[j]) {
                resultArray.push(input[i]);
            }
        }
    }
    resultArray.join();
    document.getElementById('demo').innerHTML = resultArray;
    
}