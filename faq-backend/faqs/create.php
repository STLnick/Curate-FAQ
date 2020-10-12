<?php
  $host = "localhost";
  $user = "root";
  $password = "";
  $database = "faq";

  $conn = mysqli_connect($host, $user, $password, $database);

  $question = $_POST['question'];
  $answer = $_POST['answer'];

  $faq = array('question' => $question, 'answer' => $answer);

  $query = "INSERT INTO faq (question, answer) VALUES ('$question', '$answer')";

  if (mysqli_query($conn, $query)) {
    header('Content-Type: application/json');
    echo json_encode($faq);
  } else {
    echo "Error!";
    echo mysqli_error($conn);
  }

?>