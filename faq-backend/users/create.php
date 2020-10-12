<?php
  $host = "localhost";
  $user = "root";
  $password = "";
  $database = "faq";

  $conn = mysqli_connect($host, $user, $password, $database);

  $email = $_POST['email'];
  $password = $_POST['password'];

  $user = array('email' => $email, 'password' => $password);

  $query = "INSERT INTO users (email, password) VALUES ('$email', '$password')";

  if (mysqli_query($conn, $query)) {
    header('Content-Type: application/json');
    echo json_encode($user);
  } else {
    echo "Error!";
    echo mysqli_error($conn);
  }

?>