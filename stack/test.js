module.exports = ()=>{
    let Stack = require("./");
    let studentsStack = new Stack();

    
    function validString(str){
        let brackets = {"(":")"}
        let bracketIdx = []
        let leftStack = new Stack();
        for(let idx in str){
            idx = +idx;
            if(brackets[str[idx]] && str[idx+1]!=")"){
                leftStack.push(idx)
            }
            if(str[idx] == ")"){
                let leftSideIdx = leftStack.pop();
                if(brackets[str[leftSideIdx]] == ")"){
                    bracketIdx.push([leftSideIdx, idx])
                }
            }
        }
        resArr = str.replace(/\W/g," ").split("");
        // res = res.split("").map((el,i)=>{

        // })
        // return resArr
        bracketIdx.forEach(([left,right])=>{
            resArr.splice(left,1,"(")
            resArr.splice(right,1,")")
        })

        return resArr.join("").replace(/\s+/g,"")

    }
    // console.log(validString("a)(b()c((d)"));

    function woo(n, acc){
        if(n==0) return acc
        return woo(n-1, acc + "!");
    }

  
    // function woo(n){
    //     if(n==0) return ""
    //     return woo(n-1) + "!"
    // }
    // console.log(woo(10000000))
    console.log(woo(10000,""))

}