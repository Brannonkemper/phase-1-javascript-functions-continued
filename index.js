function saturdayFun(action="roller-skate"){
    return `This Saturday, I want to ${action}!`
    }

const mondayWork = function( yeah = "go to the office"){
    return `This Monday, I will ${yeah}.`
}

function wrapAdjective(flair = "*") {
    return function(anyWord = "special") {
        return `You are ${flair}${anyWord}${flair}!`;
    };
}