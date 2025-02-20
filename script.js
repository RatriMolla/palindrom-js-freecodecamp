console.log("hi");

function checkPalindrome() {
    let inputText = document.getElementById("text-input").value;
    if(!inputText){
        alert("Please input a value")
    }
    
    
    
    
    
    
    let result = document.getElementById("result");

    
    const inputarr = inputText.toLowerCase().split("").filter(c => !c.match(/[\(\)\\.\s_,-]/gi));

    
    for (let i = 0; i < inputarr.length; i++) {
        if (inputarr[i] !== inputarr[inputarr.length - i - 1]) {
            result.innerText = `${inputText} is not a palindrome`;
            return; 
    }

}
    result.innerText = `${inputText} is a palindrome`;
}

