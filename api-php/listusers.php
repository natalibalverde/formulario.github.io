    <?php
    header ("Access-Control-Allow-Origin:*");
    $dsn="mysql:dbname=store; host=localhost:3306";
    $username="root";
    $password="";

    $connetion= new PDO($dsn,$username,$password);

    $query="SELECT * FROM users;";

    $result= $connetion->query($query, PDO::FETCH_OBJ);

    $users=[];
    foreach ($result as $item){
        $users[]=$item;
    };

    print json_encode($users);
    
