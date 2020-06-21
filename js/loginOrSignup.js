function success() {
  let data = `
            <div class='modal fade' id='signupalert'>
            <div class='modal-dialog'>
              <div class='modal-content'>
              
                <!-- Modal Header -->
                <div class='modal-header'>
                  <h4 class='modal-title'>Success</h4>
                  <button type='button' class='close' data-dismiss='modal'>&times;</button>
                </div>
                
                <!-- Modal body -->
                <div class='modal-body bg-success'>
                Congratulations You are Successfully Registered<br>
                </div>
                
                <!-- Modal footer -->
                <div class='modal-footer'>
                  <button id='close_btn' type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>
                </div>
                
              </div>
            </div>
          </div>
    <script>
            $('#signupalert').modal('show');
            $('#close_btn').click(function() {
                $('.Input').val('');
                $('.check_input').prop('checked',false);
                window.location.href = '/';
            });
            </script>`;
  return data;
}
function userFound() {
  let data = `
            <div class='modal fade' id='signupalert'>
            <div class='modal-dialog'>
              <div class='modal-content'>
              
                <!-- Modal Header -->
                <div class='modal-header'>
                  <h4 class='modal-title'>Oops !!!</h4>
                  <button type='button' class='close' data-dismiss='modal'>&times;</button>
                </div>
                
                <!-- Modal body -->
                <div class='modal-body bg-warning'>
                Email Already Found<br>
                </div>
                
                <!-- Modal footer -->
                <div class='modal-footer'>
                  <button id='close_btn' type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>
                </div>
                
              </div>
            </div>
          </div>
    <script>
            $('#signupalert').modal('show');
            </script>`;
  return data;
}
function weakPass() {
  let data = `
            <div class='modal fade' id='signupalert'>
            <div class='modal-dialog'>
              <div class='modal-content'>
              
                <!-- Modal Header -->
                <div class='modal-header'>
                  <h4 class='modal-title'>Oops !!!</h4>
                  <button type='button' class='close' data-dismiss='modal'>&times;</button>
                </div>
                
                <!-- Modal body -->
                <div class='modal-body bg-warning'>
                Na! Na! Weak Password Not Allowed<br> Your Password Should Atleast 5 Character Long!
                </div>
                
                <!-- Modal footer -->
                <div class='modal-footer'>
                  <button id='close_btn' type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>
                </div>
                
              </div>
            </div>
          </div>
    <script>
            $('#signupalert').modal('show');
            </script>`;
  return data;
}
function DBError() {
  let data = `
            <div class='modal fade' id='signupalert'>
            <div class='modal-dialog'>
              <div class='modal-content'>
              
                <!-- Modal Header -->
                <div class='modal-header'>
                  <h4 class='modal-title'>Oops !!!</h4>
                  <button type='button' class='close' data-dismiss='modal'>&times;</button>
                </div>
                
                <!-- Modal body -->
                <div class='modal-body bg-danger'>
                Sorry For the Inconvenience<br> Right Now You Can't Create an Account Try Again in a Minute
                </div>
                
                <!-- Modal footer -->
                <div class='modal-footer'>
                  <button id='close_btn' type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>
                </div>
                
              </div>
            </div>
          </div>
    <script>
            $('#signupalert').modal('show');
            </script>`;
  return data;
}
function invalidEmail() {
  let data = `
            <div class='modal fade' id='signupalert'>
            <div class='modal-dialog'>
              <div class='modal-content'>
              
                <!-- Modal Header -->
                <div class='modal-header'>
                  <h4 class='modal-title'>Oops !!!</h4>
                  <button type='button' class='close' data-dismiss='modal'>&times;</button>
                </div>
                
                <!-- Modal body -->
                <div class='modal-body bg-warning'>
                Invalid Email
                </div>
                
                <!-- Modal footer -->
                <div class='modal-footer'>
                  <button id='close_btn' type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>
                </div>
                
              </div>
            </div>
          </div>
    <script>
            $('#signupalert').modal('show');
            </script>`;
  return data;
}
function invalidName() {
  let data = `
            <div class='modal fade' id='signupalert'>
            <div class='modal-dialog'>
              <div class='modal-content'>
              
                <!-- Modal Header -->
                <div class='modal-header'>
                  <h4 class='modal-title'>Oops !!!</h4>
                  <button type='button' class='close' data-dismiss='modal'>&times;</button>
                </div>
                
                <!-- Modal body -->
                <div class='modal-body bg-warning'>
                Invalid Name
                </div>
                
                <!-- Modal footer -->
                <div class='modal-footer'>
                  <button id='close_btn' type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>
                </div>
                
              </div>
            </div>
          </div>
    <script>
            $('#signupalert').modal('show');
            </script>`;
  return data;
}
function nothingCantBeEmpty() {
  let data = `
            <div class='modal fade' id='signupalert'>
            <div class='modal-dialog'>
              <div class='modal-content'>
              
                <!-- Modal Header -->
                <div class='modal-header'>
                  <h4 class='modal-title'>Oops !!!</h4>
                  <button type='button' class='close' data-dismiss='modal'>&times;</button>
                </div>
                
                <!-- Modal body -->
                <div class='modal-body bg-warning'>
                No Informations Can't Be Empty
                </div>
                
                <!-- Modal footer -->
                <div class='modal-footer'>
                  <button id='close_btn' type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>
                </div>
                
              </div>
            </div>
          </div>
    <script>
            $('#signupalert').modal('show');
            </script>`;
  return data;
}
function noUserFound() {
  let data = `
            <div class='modal fade' id='signupalert'>
            <div class='modal-dialog'>
              <div class='modal-content'>
              
                <!-- Modal Header -->
                <div class='modal-header'>
                  <h4 class='modal-title'>Oops !!!</h4>
                  <button type='button' class='close' data-dismiss='modal'>&times;</button>
                </div>
                
                <!-- Modal body -->
                <div class='modal-body bg-warning'>
                No User Found<br>Please Register Befor Login
                </div>
                
                <!-- Modal footer -->
                <div class='modal-footer'>
                  <button id='close_btn' type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>
                </div>
                
              </div>
            </div>
          </div>
    <script>
            $('#signupalert').modal('show');
            </script>`;
  return data;
}
function wrongPass() {
  let data = `
            <div class='modal fade' id='signupalert'>
            <div class='modal-dialog'>
              <div class='modal-content'>
              
                <!-- Modal Header -->
                <div class='modal-header'>
                  <h4 class='modal-title'>Oops !!!</h4>
                  <button type='button' class='close' data-dismiss='modal'>&times;</button>
                </div>
                
                <!-- Modal body -->
                <div class='modal-body bg-warning'>
                Wrong Password
                </div>
                
                <!-- Modal footer -->
                <div class='modal-footer'>
                  <button id='close_btn' type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>
                </div>
                
              </div>
            </div>
          </div>
    <script>
            $('#signupalert').modal('show');
            </script>`;
  return data;
}

$(document).ready(function () {
  $("#signupForm").submit(function (e) {
    e.preventDefault();
    let userData = $("#signupForm").serialize();
    userData += "&signup=1";
    $.ajax({
      url: "/main_scripts/loginOrSignup.php",
      data: userData,
      method: "POST",
      success: function (response) {
        if (response == "success") $("#alerts").html(success());
        else if (response == "userFound") $("#alerts").html(userFound());
        else if (response == "weakPass") $("#alerts").html(weakPass());
        else if (response == "nothingCantBeEmpty")
          $("#alerts").html(nothingCantBeEmpty());
        else if (response == "invalidName") $("#alerts").html(invalidName());
        else if (response == "invalidEmail") $("#alerts").html(invalidEmail());
        else $("#alerts").html(DBError());
      },
    });
  });

  $("#loginForm").submit(function (e) {
    e.preventDefault();
    let userData = $("#loginForm").serialize();

    userData += "&login=1";

    $.ajax({
      url: "/main_scripts/loginOrSignup.php",
      data: userData,
      method: "POST",
      success: function (response) {
        if (response == "success") {
          window.location.href = "/";
        } else if (response == "noUserFound") $("#alerts").html(noUserFound());
        else if (response == "wrongPass") $("#alerts").html(wrongPass());
        else if (response == "nothingCantBeEmpty")
          $("#alerts").html(nothingCantBeEmpty());
      },
    });
  });
});
