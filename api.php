<?php
  header("Access-Control-Allow-Origin: *");

  function consoleLog($msg)
  {
    echo '<script type="text/javascript">console.log('
          . str_replace('<', '\\x3C', json_encode($msg))
          . ');</script>';
  }

  $test = isset($_REQUEST['test'])
  consoleLog("coucou $test!");
?>
