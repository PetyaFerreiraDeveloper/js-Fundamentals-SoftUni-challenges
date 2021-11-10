function sub(text, startIndex, count) {
    let newText = text.substring(startIndex, startIndex + count);
    console.log(newText);
}

sub('ASentance', 1, 8)