<?php

  $name = isset($_POST['name']) ? $_POST['name'] : '';
  $phone = isset($_POST['phone']) ? preg_replace("/[^0-9]/", "", $_POST['phone']) : 0;

  // ...

  $mes = '';
  if (!$phone) exit("Error! Phone is a required field");
  else {
    $mes = "<p>Имя: $name</p>";
    $mes .= "<p>Телефон: $phone</p>";
    // ...

    $to = "deltaplanirovanie@gmail.com, deltastream.dev@gmail.com, manager.deltaplan@gmail.com";
    $sub = "=?utf-8?B?" . base64_encode("Заявка с сargo-buyer.com") . '?=';
    $headers = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: getprice.by/shkaf-kupe\r\n";
    
    mail("$to", "$sub", "$mes", "$headers");
    // sms($_POST['phone'], '375296486172');
    include 'leads.php';
    echo '1';
  }


  function sms($phone, $number) {
    $url = "http://cp.websms.by";
    $timeout = 5;
    $func = 'msg_send_bulk';

    $package = array(
        array(
            'recipient' => $number,
            'message'   => "Заявка getprice.by/shkaf-kupe/\nТелефон: $phone",
            'sender'    => 'DeltaPlanBY'
        ),
    );
    $rawData = json_encode($package);
    $ch = curl_init();

    //задаем параметры CURL

    curl_setopt_array($ch, array(
        CURLOPT_URL            => $url,
        CURLOPT_FAILONERROR    => 1,
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_TIMEOUT        => $timeout,
        CURLOPT_CONNECTTIMEOUT => 0,
        CURLOPT_POST           => 1,
        CURLOPT_POSTFIELDS     => array(
            'r'        => 'api/' . $func,
            'user'     => 'deltaplanirovanie@gmail.com',
            'apikey'   => '0UmzxrSo9x',
            'messages' => $rawData)
    ));

    $result = curl_exec($ch);

    if ($result) {
        $__BOM = pack('CCC', 239, 187, 191);
        while (0 === strpos($result, $__BOM)) $result = substr($result, 3);
        $result = json_decode($result);
    } else {
        echo 'Ошибка доступа к сервису !';
    }
    curl_close($ch);
}

?>