let person ={
    firstName: 'Antonio',
    lastName: 'Rungo',
    age: 40,
    children: ['Winner', 'Keyvin'],
    address: {
        street: 'Matola Rio',
        city: 'Matola',
        state: 'Boane'
    },
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
}

function changeText(){
    var heading = document.getElementById('heading')
    heading.innerHTML = 'You Clicked'
}

function showDate(){
   var time = document.getElementById('time');
   time.innerHTML = Date()
}

function clearDate(){
   var clear = document.getElementById('time')
   clear.innerHTML = ''
}

function changeBackground(x){
    var heading = document.getElementById('heading')
    var body = document.getElementById('body');
    body.style.backgroundColor = x.value
    heading.style.color = x.value
}


function validateForm(){
    var firstName = document.forms['myForm']['firstName'].value;
    if (firstName == null || firstName == ""){
        alert("First name is required");
        return false;
    }

    if(firstName.length < 3){
        alert("First name must be at least 3 chars")
        return false;
    }
}





