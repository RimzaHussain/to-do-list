<?php
require_once "sessions.php";
require_once "connection.php";


if (isset($_POST['listData'])) {
    if (isEverythingOkay()) {
        $title = $_POST['title'];
        $desc = $_POST['description'];

        if (empty($title) || empty($desc)) {
            echo "NothingCantBeEmpty";
            exit(1);
        }
        $title_validation = "/^[a-zA-Z0-9 ]*$/";

        if (!preg_match($title_validation, $title)) {
            echo "invalidTitle";
            exit(1);
        }

        $stmt = $conn->prepare("INSERT INTO tblList (inUserId,stTitle,stDesc,daCreated) 
                                VALUES (?,?,?,NOW())");
        $stmt->bind_param("iss", $_SESSION['id'], $title, $desc);

        if ($stmt->execute())
            echo "success";
        else
            echo $stmt->error;
    }
}

if (isset($_POST['getList'])) {
    $stmt = $conn->prepare("SELECT * FROM tblList WHERE inUserId=? ORDER BY inId DESC");
    $stmt->bind_param("i", $_SESSION['id']);
    if ($stmt->execute()) {
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "<li class='list-group-item list'>
                <span class='float-right text-muted' style='font-weight: 100;'>" . $row['daCreated'] . "</span>
                <h5>" . $row['stTitle'] . "</h5>
                <p class='text-muted' style='font-weight: 100;'>" . $row['stDesc'] . "</p>
                <span class='ops float-right' rowid='" . $row['inId'] . "'>
                    <a type='button' class='fa fa-trash-o text-danger icon-size op-icons deleteList'></a>
                </span>
                        </li>";
            }
        }
    }
}

if (isset($_POST['deleteList'])) {
    $rowid = $_POST['rowid'];

    $stmt = $conn->prepare("DELETE FROM tblList WHERE inId=?");
    $stmt->bind_param("i", $rowid);
    if ($stmt->execute())
        echo "done";
    else
        echo $stmt->error;
}