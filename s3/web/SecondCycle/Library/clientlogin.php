<php
	include("config.php");
	$myusername = mysqli_real_escape_string($db,$_POST['username']);
        $mypassword = mysqli_real_escape_string($db,$_POST['password']);
        $sql = "SELECT id FROM admin WHERE username = '$myusername' and passcode = '$mypassword'";
        $result = mysqli_query($db,$sql);
        $row = mysqli_fetch_array($result,MYSQLI_NUM);
        $active = $row['active'];
      
        $count = mysqli_num_rows($result);
        if($count == 1) {
        	header("location: welcome.php");
        } else {
        	$error = "Your Login Name or Password is invalid";
      	}
?>
