<?php
  $host = "localhost";
  $user = "root";
  $password = "";
  $database = "faq";

  $conn = mysqli_connect($host, $user, $password, $database);

  $query = "SELECT id, answer, question FROM faq";

  $resultArray = array(); // Array to return

  if ($result = mysqli_query($conn, $query)) {
    // Create object for each FAQ and push onto array
    while ($row = mysqli_fetch_assoc($result)) {
      $elementObj = (object) [
        'answer' => $row['answer'],
        'id' => $row['id'],
        'question' => $row['question']
      ];
      array_push($resultArray, $elementObj);
    }
  
    header('Content-Type: application/json');
    echo json_encode($resultArray);
  } else {
    echo "Error!";
    echo mysqli_error($conn);
  }

?>