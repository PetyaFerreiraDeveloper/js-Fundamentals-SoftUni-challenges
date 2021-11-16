function extractFile(input) {
    let fileSplit = input.split('\\');
    let fileName = fileSplit.pop();
    let fileNameSplit = fileName.split('.');
    let extension = fileNameSplit.pop();
    console.log(`File name: ${fileNameSplit.join('.')}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.bak.pptx')