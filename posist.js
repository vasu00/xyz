$(document).ready(function(){
	
	$(".x").hide();

	$(".passVer").click(function(){
		showValue();
	})

	$(".add").click(function(){
		addChild();

	})

	$("#ver").click(function(){
		verify();
	})

})

var arr=[];
function addChild(){
	debugger;
		var arr2=new Array();	

	arr2.push($("#name").val()+$("#password").val());
	arr2.push($("#value").val()+$("#password").val());
	arr2.push($("#password").val());

	arr.push(arr2);
	
$("form").show();


	$("#list").append('<tr>'+ '<td>'+arr2[0] +'</td>'+','+ '<td>'+' <button class="passVer1"> click here to see the value</button>' +'</td>'+'<td>'+
	 '<td> <button class="add1">Add</button> </td>' +'</li>');
	
	$(".passVer1").click(function(){
		showValue();
		alert(i)
	})

	$(".add1").click(function(){
		addChild();
		alert(i)

	})

}


function showValue(){
		
		$(".x").show();
	
}
function verify(){
	debugger;

	if( $("#passVer").val()==arr[0][2] ){
		alert("Your Encrypted Value is : " + (arr[0][1]) )
		alert("Your real value is : " + (arr[0][1]))
	}
	else(
		alert("wrong password"))
}