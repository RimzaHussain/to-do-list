$(".show-todolist-modal").click(function (event) {
  event.preventDefault();
  $("#todolist-modal").modal("show");
});

function successfullyDeleted() {
  let data = `
				<div class='modal fade' id='signupalert'>
				<div class='modal-dialog'>
				  <div class='modal-content'>
				  
					<!-- Modal Header -->
					<div class='modal-header'>
					  <h4 class='modal-title'>Done !!!</h4>
					  <button type='button' id='msgCloseBtn' class='close' data-dismiss='modal'>&times;</button>
					</div>
					
					<!-- Modal body -->
					<div class='modal-body bg-success'>
					Your task has been deleted<br>
					</div>
					
					<!-- Modal footer -->
					<div class='modal-footer'>
					  <button id='msgCloseBtn' type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>
					</div>
					
				  </div>
				</div>
			  </div>
		<script>
				$('#signupalert').modal('show');
				</script>`;
  return data;
}

function success() {
  let data = `
			  <div class='modal fade' id='signupalert'>
			  <div class='modal-dialog'>
				<div class='modal-content'>
				
				  <!-- Modal Header -->
				  <div class='modal-header'>
					<h4 class='modal-title'>Done !!!</h4>
					<button type='button' id='msgCloseBtn' class='close' data-dismiss='modal'>&times;</button>
				  </div>
				  
				  <!-- Modal body -->
				  <div class='modal-body bg-success'>
				  Your task has been added to the list<br>
				  </div>
				  
				  <!-- Modal footer -->
				  <div class='modal-footer'>
					<button id='msgCloseBtn' type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>
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
  return `
			  <div class='modal fade' id='signupalert'>
			  <div class='modal-dialog'>
				<div class='modal-content'>
				
				  <!-- Modal Header -->
				  <div class='modal-header'>
					<h4 class='modal-title'>Oops !!!</h4>
					<button type='button' id='msgCloseBtn' class='close' data-dismiss='modal'>&times;</button>
				  </div>
				  
				  <!-- Modal body -->
				  <div class='modal-body bg-warning'>
				  No Informations Can't Be Empty
				  </div>
				  
				  <!-- Modal footer -->
				  <div class='modal-footer'>
					<button type='button' id='msgCloseBtn' class='btn btn-danger' data-dismiss='modal'>Close</button>
				  </div>
				  
				</div>
			  </div>
			</div>
	  <script>
			  $('#signupalert').modal('show');
			  </script>`;
}

function invalidName() {
  let data = `
			  <div class='modal fade' id='signupalert'>
			  <div class='modal-dialog'>
				<div class='modal-content'>
				
				  <!-- Modal Header -->
				  <div class='modal-header'>
					<h4 class='modal-title'>Invalid Title</h4>
					<button type='button' id='msgCloseBtn' class='close' data-dismiss='modal'>&times;</button>
				  </div>
				  
				  <!-- Modal body -->
				  <div class='modal-body bg-warning'>
				  <strong>Only numbers and letters are allowed</strong>
				  </div>
				  
				  <!-- Modal footer -->
				  <div class='modal-footer'>
					<button type='button' id='msgCloseBtn' class='btn btn-danger' data-dismiss='modal'>Close</button>
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
  $("body").delegate(".deleteList", "click", function (event) {
    event.preventDefault();
    let rowid = $(this).parent()[0].attributes.rowid.value;
    $("#confirmDeleteList")[0].value = rowid;
    $("#deleteList").modal("show");
  });

  $("body").delegate("#confirmDeleteList", "click", function (event) {
    event.preventDefault();
    let listId = $(this)[0].value;
    $.ajax({
      url: "/main_scripts/list.php",
      data: {
        deleteList: 1,
        rowid: listId,
      },
      method: "POST",
      success: function (response) {
        if (response == "done") {
          $("#deleteList").modal("hide");
          $("#error").html(successfullyDeleted());
        }
      },
    });
  });

  $("body").delegate("#msgCloseBtn", "click", function (event) {
    event.preventDefault();
    location.reload(true);
  });

  $("body").delegate("#close", "click", function (event) {
    event.preventDefault();
    $("#title")[0].value = "";
    $("#description")[0].value = "";
  });

  $("#createList").submit(function (event) {
    event.preventDefault();

    let listInfo = $("#createList").serialize();

    listInfo += "&listData=1";

    $.ajax({
      url: "/main_scripts/list.php",
      data: listInfo,
      method: "POST",
      success: function (response) {
        if (response == "success") {
          $("#todolist-modal").modal("hide");
          $("#error").html(success());
        } else if (response == "NothingCantBeEmpty") {
          $("#todolist-modal").modal("hide");
          $("#error").html(nothingCantBeEmpty());
        } else if (response == "invalidTitle") {
          $("#todolist-modal").modal("hide");
          $("#error").html(invalidName());
        }
      },
    });
  });

  $.ajax({
    url: "/main_scripts/list.php",
    data: {
      getList: 1,
    },
    method: "POST",
    success: function (response) {
      $("#list").html(response);
    },
  });
});
