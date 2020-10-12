<?php
  $host = "localhost";
  $user = "root";
  $password = "";
  $database = "faq";

  $conn = mysqli_connect($host, $user, $password, $database);

  // Read parameters sent in PATCH request
  parse_str(file_get_contents("php://input"), $update_vars);
  // ID to delete
  $id = intval($update_vars['id']); 
  // String to SET in SQL database
  $setstr = "answer = '" . $update_vars['answer'] . "', question = '" . $update_vars['question'] . "'";

  $query = "UPDATE faq SET $setstr WHERE id=$id";

  if (mysqli_query($conn, $query)) {
    echo "Successfully updated FAQ with ID: $id";
  } else {
    echo "Error!";
    echo mysqli_error($conn);
  }

?>