<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Login</title>
</head>

<body>
    <div id="alerts"></div>
    <div class="form-modal">

        <div class="form-toggle">
            <button id="login-toggle" onclick="toggleLogin()">log in</button>
            <button id="signup-toggle" onclick="toggleSignup()">sign up</button>
        </div>

        <div id="login-form">
            <form id="loginForm">
                <input name="email" type="text" placeholder="Enter email" />
                <input name="password" type="password" placeholder="Enter password" />
                <button type="submit" class="btn login">login</button>
                <hr />
            </form>
        </div>

        <div id="signup-form">
            <form id="signupForm">
                <input name="email" type="email" placeholder="Enter your email" />
                <input name="name" type="text" placeholder="Name" />
                <input name="password" type="password" placeholder="Create password" />
                <button class="btn signup" type="submit">create account</button>
                <hr />
            </form>
        </div>

    </div>

    <script src="js/jquery-3.5.1.slim.min.js"></script>
    <script src="js/jquery.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/style.js"></script>
    <script src="js/loginOrSignup.js"></script>
</body>

</html>