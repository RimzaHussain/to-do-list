<?php
require_once "main_scripts/sessions.php";

if (!isEverythingOkay()) {
    header("location:/login.php");
}
?>

<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- google font -->
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/custom.css">
    <title>To-Do List</title>
</head>

<body>
    <id id="error"></id>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand"><strong>TO-DO </strong>List</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ">

                <li class='nav-item'>
                    <a class='nav-link' href='main_pages/logout.php'><i class="fa fa-sign-out"></i> Logout</a>
                </li>
            </ul>
        </div>
    </nav>
    <!-- Header -->
    <header>
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <h1 class="header-tittle">To-Do List</h1>
                </div>
                <div class="col-sm-6 mt-2">
                    <a href="#" class="btn btn-success show-todolist-modal float-right">Create New List
                        <i class="fa fa-plus-circle"></i></a>
                </div>
            </div>
        </div>

    </header>
    <!-- Main container -->
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="modal fade" id="todolist-modal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content own-modal-content">
                            <id id="dialogError"></id>
                            <div class="modal-header own-modal-header">
                                <h5 class="modal-title">Create New List</h5>
                                <p><strong>To-Do List<strong></p>
                                <button type="button" id="close" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form id="createList">
                                <div class="modal-body own-modal-body">
                                    <div class="form-group">
                                        <label for="" class="control-lable">Title</label>
                                        <input type="text" name="title" id="title" class="form-control input-lg">
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="control-lable">Description</label>
                                        <textarea rows="2" name="description" id="description"
                                            class="form-control"></textarea>
                                    </div>
                                </div>
                                <div class="modal-footer own-modal-footer">
                                    <button type="submit" class="btn btn-primary" name="add">Add</button>
                                    <button type="button" id="close" class="btn btn-secondary"
                                        data-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='modal fade' id='deleteList'>
            <div class='modal-dialog'>
                <div class='modal-content'>

                    <!-- Modal Header -->
                    <div class='modal-header'>
                        <h4 class='modal-title'>Info</h4>
                        <button type='button' class='close' data-dismiss='modal'>&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class='modal-body bg-secondary'>
                        <strong>Do you want to delete?</strong>
                    </div>

                    <!-- Modal footer -->
                    <div class='modal-footer'>
                        <button type='button' class='btn btn-danger' id="confirmDeleteList" data-dismiss='modal'
                            value="">Yes</button>

                        <button type='button' class='btn btn-success' data-dismiss='modal'>No</button>
                    </div>

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <ul class="list-group" id="list">
                </ul>
            </div>
        </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Bootstrap JS -->
    <script src="js/jquery-3.5.1.slim.min.js"></script>
    <script src="js/jquery.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/list.js"></script>
</body>

</html>