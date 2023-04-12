function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5t318I4Te7c":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwehazXDvPZi0MbijiAnkqu25QNkfqgYCsdDZvNXFFM-Asx97t9pCluhBw4vz12ffBD/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

