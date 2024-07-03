<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wędkowanie</title>
    <link rel="stylesheet" href="styl_1.css">
</head>
<body>
    <section class="baner"><h1>Portal dla wędkarzy</h1></section>
    <section class="lewy1"><h3>Ryby zamieszkujące rzeki</h3> 
        <ol>
            <li></li>
        </ol>
    </section>
    <section class="lewy2">
      
        <h3>Ryby drapieżne naszych wód</h3>
        <table>
            <tr>
                <th>L.p</th>
                <th>Gatunek</th>
                <th>Występowanie</th>
            </tr>
            <?php
        include_once "skrypt2.php";
        ?>
            
        </table>
    </section>    
    <section class="prawy">
        <img src="ryba1.jpg" alt="Sum">
        <a href="kwerendy.txt">Pobierz kwerendy</a>
    </section>
    <footer><p>Stronę wykonał: 321321321</p></footer> 
</body>
</html>