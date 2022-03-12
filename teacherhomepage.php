<?php
session_start();
if(!isset($_SESSION['teacherloggedin']) && $_SESSION['loggedin']!=true ){
    header("location:index.php");
    exit;
}
?>
<?php
$showAlert=false;
  include 'partials/connection.php';
  if($_SERVER["REQUEST_METHOD"]=="POST"){
    $topic=$_POST["topic"];
    $sql="CREATE TABLE `alt-f4`.`".$topic."` ( `srno` INT NOT NULL AUTO_INCREMENT , `tutor` VARCHAR(20) NOT NULL , `topic` VARCHAR(50) NOT NULL , `vedio` VARCHAR(50) NOT NULL , `pdf` VARCHAR(50) NOT NULL , PRIMARY KEY (`srno`)) ENGINE = InnoDB;

    ";
    $result=mysqli_query($conn,$sql);
    if($result){
        echo "table created";
        header("location:addingVedioToCourse.php");
    }else{
        echo "table didnt created";
    }
  }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

        * {
            margin: 0;
            padding: 0;
            font-family: 'Open Sans', sans-serif;
        }

        .nav_tr {
            font-weight: bold;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 100%;
            position: fixed;
            top: 0;
            background-color: white;
        }

        .nav_tr div {
            margin: 20px;
            top: 0px;
            position: relative;
            transition: all 0.3s ease;
            cursor: pointer;
            text-align: center;
        }

        .nav_tr div:hover {
            top: -3px;
            color: #FF2E63;
        }

        .nav_tr a {
            color: inherit;
            text-decoration: inherit;
        }

        .altf4logo {
            margin-right: auto;
            width: 150px;
            margin-left: 10px;
            cursor: pointer;
        }

        #logout {
            padding: 10px;
            color: white;
            background-color: #FF2E63;
            border-radius: 5px;
        }

        #logout:hover {
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        }

        .contentCreate {
            margin-top: 82px;
            display: flex;
            justify-content: center;
            height: 500px;
            align-items: center;
        }

        .contentCreate input{
            padding: 10px;
            height: 30px;
            width: 30vw;
            font-size: 20px;
        }

        .contentCreate button{
            padding: 10px;
            background-color: #FF2E63;
            color: white;
            font-size: 20px;
            border-radius: 10px;
            font-weight: bold;
            text-align: center;
            cursor: pointer;
        }

        @media only screen and (max-width: 768px) {
            .nav_tr {
                justify-content: center;
            }

            .altf4logo {
                display: none;
            }
        }
    </style>
</head>

<body>

    <head>
        <div class="nav_tr">
            <img src="altf4 logo.svg" alt="altf4 logo" class="altf4logo">
            <a href="home.php">
                <div id="editor">
                    Home
                </div>
            </a>
            <div id="editor">
                Editor
            </div>

            <a href="project_idea.php">
                <div id="projectIdeas">
                    Project Ideas
                </div>
            </a>
            <a href="logout.php">
                <div id="logout">
                    Logout
                </div>
            </a>
        </div>
        <div class="contentCreate">
            <!-- <button>create coruse</button> -->
            <form action="teacherhomepage.php" method="POST">
                <input type="text" placeholder="Enter Course Name" name="topic">
                <!-- <input type="text" placeholder="enter topic name" name="topic"> -->
                <button type="submit">Create</button>
            </form>

        </div>
    </head>
</body>

</html>