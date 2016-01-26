/**
 * Created by milletyr002 on 11/5/2015.
 */
function SignIn(){
    var Username = document.getElementById("username");
    var Password = document.getElementById("password");

    var UName = Username.value;
    var Pass = Password.value;

//password and name will be pulled from database and checked
    if(UName == "Tyree"){
        if(Pass == "one"){

             window.location = "StudentPage.html";
        }
        else{
            alert("password not valid");
        }
    }
    else{
        alert("Name is not found");
    }

}

function LogOut(){
    window.location = "index.html";
}

//use this function after giving core cash
function AddHistory(){
    var table = document.getElementById("history");
    var NewRow = table.insertRow(1);
    var cell1 = NewRow.insertCell(0);
    var cell2 = NewRow.insertCell(1);
    var cell3 = NewRow.insertCell(2);
    //change to variables
    cell1.innerHTML = "date"
    cell2.innerHTML = "teacher"
    cell3.innerHTML = "reason"
}