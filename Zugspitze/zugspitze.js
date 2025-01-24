const range = (start, stop, step = 1) => 
    Array.from(
      { length: Math.ceil((stop - start) / step) },
      (_, i) => start + i * step,
    );

    const getRandomIntegerInclusive = (min, max) => {
      min = Math.ceil(min)
      max = Math.floor(max)
    
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
    

function randomimg(Arr){
document.getElementById("grunimg").src="./Zugspitze/fotos_zugspitze/"+Arr[getRandomIntegerInclusive(0,Arr.length)]+".JPG"
return Arr
}