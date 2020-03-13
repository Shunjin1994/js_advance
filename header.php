<header>
  <div class="site-width">
    <h1><a href="index.php">WEBUKATU MARKET</a></h1>
    <nav id="top-nav">
      <ul>
        <?php
          if(empty($_SESSION['user_id'])){
        ?>
            <li><a href="signup.php" class="btn btn-primary">ユーザー登録</a></li>
            <li><a href="login.php">ログイン</a></li>
        <?php
          }else{
        ?>
        <div id="main1">
            <ul class="menu">
                <li>メニュー
                    <ul class="sub">
                        <li><a href="mypage.php">マイページ</a>
                        <li><a href="registProduct.php">商品を出品する</a></li>
                        <li><a href="tranSale.php">販売履歴を見る</a></li>
                        <li><a href="profEdit.php">プロフィール編集</a></li>
                        <li><a href="passEdit.php">パスワード変更</a></li>
                        <li><a href="logout.php">ログアウト</a></li>
                        <li><a href="withdraw.php">退会</a></li>
                    </ul>
                </li>
              </ul>
          </div>
        <?php
          }
        ?>
      </ul>
    </nav>
  </div>
</header>
<script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous"></script>
    <script src="app.js"></script>