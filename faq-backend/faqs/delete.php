<?php
  $host = "localhost";
  $user = "root";
  $password = "";
  $database = "faq";

  $conn = mysqli_connect($host, $user, $password, $database);

  // Read parameters sent in DELETE request
  parse_str(file_get_contents("php://input"), $del_vars);

  // Grab ID to delete
  $id = intval($del_vars['id']);

  $query = "DELETE FROM faq WHERE id=$id";

  if (mysqli_query($conn, $query)) {
    echo "Successfully deleted FAQ with ID: $id";
  } else {
    echo "Error!";
    echo mysqli_error($conn);
  }

?>