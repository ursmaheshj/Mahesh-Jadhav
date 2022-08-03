

// Button with id myBtn
// let myBtn = document.getElementById("myBtn");

// div with id content 
// let content = document.getElementById("content");

// function getData(){
//     console.log("Started getData")
//     url = "harry.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }

// function getData(){
//     console.log("Started getData")
//     url = "https://api.github.com/users";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.json();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }


// function postData(){
//     console.log('This is my tutorial 42');
//     url = "https://contactme2899.herokuapp.com/contacts/";
    
    // var data = `{
    //     "name": "name",
    //     "email": "email@123.com",
    //     "subject": "subject",
    //     "detail": "detail"
    //        }`;
//     params = {
//         method:'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: data
//     }
//     fetch(url, params).then(response=> response.json())
//     .then(data => console.log(data)
//     )
// }

// console.log("Before running getData")
// getData()
// console.log("After running getData")



//------------------------//



// function Send(){
// 	var url = "https://contactme2899.herokuapp.com/contacts/";

// var name= document.getElementById("name").value;
// var email= document.getElementById("email").value;
// var subject= document.getElementById("subject").value;
// var detail= document.getElementById("detail").value;

// 	var xhr = new XMLHttpRequest();
// 	xhr.open("POST", url);

// xhr.setRequestHeader("Content-Type", "application/json");

// xhr.onreadystatechange = function () {
//    if (xhr.readyState === 4) {
//       console.log(xhr.status);
//       console.log(xhr.responseText);
//    }};
//    var data = `{
//         "name": "name",
//         "email": "email",
//         "subject": "subject",
//         "detail": "detail"
//     }`;

// xhr.send(data);
// }




		
		const url='https://contactme2899.herokuapp.com/contacts/';
		const formEl=document.querySelector('form');

        
        
		formEl.addEventListener("submit",async (e)=>{
			e.preventDefault();
            var name1= document.getElementById("name").value;
            var email= document.getElementById("email").value;
            var subject= document.getElementById("subject").value;
            var detail= document.getElementById("detail").value;
            var data = `{
            "name": "${name1}",
            "email": "${email}",
            "subject": "${subject}",
            "detail": "${detail}"
            }`;

        params = {
            method:'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data //JSON.stringify(jsonObject),
        }
		
		try {
            const response = await fetch(url,params);
            //const json = await response.json();
            alert("Thank you for connecting with us");
        } catch (e) {
            console.error(e);
            alert("Please try again there was an error");
        }
		});

	
