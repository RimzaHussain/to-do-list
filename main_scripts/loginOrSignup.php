<?php
require_once "sessions.php";
require_once "connection.php";

if (isset($_POST['signup'])) {
    $username = $_POST['name'];
    $email = $_POST['email'];
    $password = md5($_POST['password']);

    $username_validate = "/^[a-zA-Z ]*$/";
    $email_validate = "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9]+(\.[a-z]{2,4})$/";

    if (empty($email) || empty($username) || empty($password)) {
        echo "nothingCantBeEmpty";
        exit(1);
    }
    if (!preg_match($username_validate, $username)) {
        echo "invalidName";
        exit(1);
    }
    if (!preg_match($email_validate, $email)) {
        echo "invalidEmail";
        exit(1);
    }
    if (strlen($password) < 5) {
        echo "weakPass";
        exit(1);
    }


    $stmt = $conn->prepare("SELECT * FROM tblUsers WHERE stEmail=?");
    $stmt->bind_param("s", $email);
    if ($stmt->execute()) {
        $result = $stmt->get_result();
        $stmt->close();
        if ($result->num_rows > 0) {
            echo "userFound";
            exit(1);
        }
    }
    $stmt = $conn->prepare("INSERT INTO tblUsers (stUserName,stEmail,stPassword,daUserCreated) VALUES(?,?,?,NOW())");
    $stmt->bind_param("sss", $username, $email, $password);
    if ($stmt->execute()) {
        $_SESSION['logged'] = 1;
        $_SESSION['id'] = $stmt->insert_id;;
        echo "success";
    }
    // echo $username . " " . $email . " " . $password;
}



if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $pass = $_POST['password'];

    $pass = md5($pass);

    if (empty($email) || empty($pass)) {
        echo "nothingCantBeEmpty";
        exit(1);
    }

    $stmt = $conn->prepare("SELECT * FROM tblUsers WHERE stEmail=?");
    $stmt->bind_param("s", $email);
    if ($stmt->execute()) {
        $result = $stmt->get_result();
        $stmt->close();
        if ($result->num_rows == 1) {
            $stmt = $conn->prepare("SELECT * FROM tblUsers WHERE stEmail=? AND stPassword=?");
            $stmt->bind_param("ss", $email, $pass);
            if ($stmt->execute()) {
                $result = $stmt->get_result();
                $stmt->close();
                if ($result->num_rows == 1) {
                    $row = $result->fetch_assoc();
                    $_SESSION['logged'] = 1;
                    $_SESSION['id'] = $row['inId'];
                    echo "success";
                } else {
                    echo "wrongPass";
                    exit(1);
                }
            }
        } else {
            echo "noUserFound";
            exit(1);
        }
    }
}