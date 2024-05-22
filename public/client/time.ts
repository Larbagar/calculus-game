let offset = 0

function getTime(){
    return new Date().getTime() + offset
}

function setOffset(newOffset: number){
    offset = newOffset
}

export {offset, getTime, setOffset}