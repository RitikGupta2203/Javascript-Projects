const form = document.querySelector('form')

//this usecase will give you empty value since this will take the value when the page loads
//const height= parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height= parseInt(document.querySelector('#height').value)
    const weight= parseInt(document.querySelector('#weight').value)
    const result= document.querySelector('#results')

    if(height === ''|| height<0 || isNaN(height)){
        result.innerHTML= 'Please Enter a Valid Height'
    }else if(weight === ''|| weight<0 || isNaN(weight)){
        result.innerHTML= 'Please Enter a Valid Weight'
    }else{
      const BMI = (weight/ ((height *height)/10000)).toFixed(2)
      //show the result
      if(BMI<18.6){
        result.innerHTML = `<span>${BMI} <br>You are Under Weight</span>`
    }else if( BMI>24.9){
        result.innerHTML = `<span>${BMI} <br> You are Over Weight</span>`
    }else if(BMI>18.6 && result<24.9 ){
        result.innerHTML = `<span>${BMI} <br> You are Fit</span>`
    }
      
    }

})