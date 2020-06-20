console.log("it Works");
$(document).ready(function(){
    $('.submit').click(function(event){
        console.log('cicked')

        var name=$('.name').val()
        var email=$('.email').val()
        var subject=$('.subject').val()
        var message=$('.message').val()
        if(name.length>=2){
            console.log("Name Verified")
        }else{
            event.preventDefault()
            console.log("Name is not Verified")
        }

        if(email.length>5 && email.includes('@') && email.includes('.')){
            console.log("Eamil Verified")
        }else{
            event.preventDefault()
            console.log("Eamil is not Verified")
        }
        if(subject.length>2){
            console.log("Subject Verified")
        }else{
            event.preventDefault()
            console.log("subject is not Verified")
        }
        if(message.length>5){
            console.log("Message Verified")
        }else{
            event.preventDefault()
            console.log("Message is not Verified")
        }
        
    })
})