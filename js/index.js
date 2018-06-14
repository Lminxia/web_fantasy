function more(x){
	document.getElementById("fix"+x).style.marginTop="-250px";
	document.getElementById("fix"+x).style.height="460px";	
	document.getElementById("mo"+x).style.display="none";
	document.getElementById("le"+x).style.display="block";

}
function less(y){
	document.getElementById("fix"+y).style.marginTop="0";
	document.getElementById("fix"+y).style.height="220px";
	document.getElementById("mo"+y).style.display="block";	
	document.getElementById("le"+y).style.display="none";
}

$(function(){			
	$('#enter').validate({
		rules: {
			user: {
				required: true,
				rangelength:[2,10]
			},
			enterpassword: {
				required: true,
				minlength: 6
			}
		}
	})
	
	$("#enrol").validate({
		rules: {
			useremail:{
				required: true,
				email:true
			},
			enrolpassword: {
				required: true,
				minlength: 6
			},
			comfirmpassword: {
				required: true,
				 equalTo: "#enrolpassword"
			},
			phone: {
				required: true,
				number : true,
				minlength:11,
				maxlength:11
			}
		}
//		,
//		messages: {
//			useremail:{
//				required: "请输入邮箱",
//				email: "请输入正确的邮箱"
//			},
//			enrolpassword: {
//				required: "必须填写密码",
//				minlength: "用密码长度不能小于6"
//			},
//			comfirmpassword: {
//				required: "请再次输入密码",
//				equalTo: "两次密码输入不一致"
//			},
//			phone: {
//				required: "请输入手机号码",
//				rangelength: "请输入11位手机号码"
//			}
//		}
	})
	
})

