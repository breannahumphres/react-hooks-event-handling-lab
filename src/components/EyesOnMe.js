// Code EyesOnMe Component Here
function EyesOnMe (){
    function handleFocusChange() {
        console.log("Good!");
    }
    function handleBlurChange() {
        console.log("Hey! Eyes on me!");
    }
    return (
        <div>
            <button  
            name = "Eyes on me" 
            onFocus = {handleFocusChange}
            onBlur = {handleBlurChange}
            >Eyes on me
            </button>
            </div>
    )
}

export default EyesOnMe;