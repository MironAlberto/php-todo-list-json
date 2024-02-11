<?php
    // usare file_get_contents per recuperare i todo già esistenti
    $todosJSON = file_get_contents('backend/database.json');

    // usare json_encode per trasformare la string json dei todo in un array di array associativi
    $todos = json_decode($todosJSON, true);

    // add new todo
    $addTodo = [
        'todo' => $_POST['todo'],
        'stato' => false
    ];

    // Add new todo to the array 
    $todos[] = $addTodo;

    // trasformare array in una string json
    $newTodosJSON = json_encode($todos);

    // aggiungere la string json in database.json
    file_put_contents('backend/database.json', $newTodosJSON);

?>