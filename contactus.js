let mail = document.getElementById("mail");
let truemail = document.getElementById("mailTest");
let type = document.getElementById("messageType").value;
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let form = document.getElementById("formBox");
let weirdlettercollection = "1BDE0A7C3F893B90A2D371DEE3602DB7BF40";
let wrong = document.getElementById("wrong");
let sent = document.getElementById("sent");



function sendTelega(){
		console.log(message.value)
		text = message.value
		url=`https://api.telegram.org/bot6809638221:AAFmSOPVuXOaqo1AgQHDD8XL0H9X4jOA0cE/sendMessage?chat_id=-1002074351363&text=${text}`;
		fetch(url)
    if(!mail.value.localeCompare(truemail.value)){
        wrong.classList.remove('active');
        fetch(url).then(/*message => alert(message)*/);
        sent.classList.add('active');
        form.reset();
        return false;
    }else{
        wrong.classList.add('active');
        sent.classList.remove('active');
        return false;
    }
}
/*Email.send({
            SecureToken : "3b588c44-1ddf-466c-b8d2-207a7aeb752d",
            To : 'serezgvozdkov@mail.ru',
            From : 'VirmLeed@gmail.com',
            Subject : type + ' // ' + subject.value,
            Body : message.value + '\n // ' + truemail.value,
        })*/