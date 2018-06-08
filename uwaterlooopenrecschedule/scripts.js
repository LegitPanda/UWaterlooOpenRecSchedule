//ui
var filterForm = document.createElement("form");
filterForm.id = "filterForm";
filterForm.style.display = "flex";
filterForm.style.margin = "2px";
filterForm.setAttribute("onsubmit","return false;")

var filterLabel = document.createElement("label");
filterLabel.textContent="Filter:";
filterLabel.style.marginRight = "5px";

var filterInput = document.createElement("input");
filterInput.type = "input";
filterInput.className = "form-control";
filterInput.style.height = "25px";
filterInput.style.width = "auto";
filterInput.addEventListener('input', function(e) {
  clearTimeout(timeoutID);
  var timeoutID = setTimeout(function() {
	unhide()
    hide()
  }, 1000);
});

filterForm.appendChild(filterLabel);
filterForm.appendChild(filterInput);

var calendar = document.getElementById("calendarDiv")
calendar.parentNode.insertBefore(filterForm,calendar)

 //init
var activities = document.getElementsByClassName("fc-title");

//hide
function hide()
{
	var searchStr = filterInput.value;
	if (String.trim(searchStr)==="")
	{
		return;
	}

	for (var i = 0 ; i < activities.length; i++) 
	{
		var activity = activities.item(i);
		if (activity.innerHTML.toLowerCase().indexOf(searchStr.toLowerCase())!==-1) 
		{
			var dateIndex = activity.innerHTML.indexOf((new Date()).getFullYear());
			if (dateIndex!== -1)
			{
				activity.innerText = activity.innerHTML.substring(dateIndex + 6);
			}
		}
		else
		{
			activity.parentNode.parentNode.style.display = 'none';
		}
		
	}
}

//unhide
function unhide()
{
	for (var i = 0 ; i < activities.length; i++)
	{
		var activity = activities.item(i);
		activity.parentNode.parentNode.style.display = "block";
	}
}