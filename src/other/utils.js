export const followers = (foll) =>{
    if (foll<1000){
        return foll
    }
    return (foll/1000).toFixed(1)+'k';
}