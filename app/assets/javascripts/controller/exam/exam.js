// Code goes here

// Code goes here
var app = angular.module('sinav', ['ui.bootstrap','ngResource']);

app.factory('Answer', ['$resource', function($resource){
  return  $resource("/answers/:id", {id: "@id"}, {
    'save'   : {method:'POST'},
    'query'  : {method: 'GET'}
  });
}]);

app.controller('sinavapp',['$scope',  '$modal', '$log', '$timeout', 'Answer', function($scope, $modal, $log, $timeout, Answer) {
  $scope.answers = [];  
  
  $scope.a = Answer.query(function(res) {
    for(i = 0; i < res.answers.length; i++){
      $scope.answers.push(res.answers[i].answers.exam_answer);
    }
  }); 
  $scope.questions = [
    {
        "id": 0,
        "question": "Eski Roma'da gladyatör dövüşlerinin yapıldığı 'arena'nın kelime anlamı nedir?",
        "options" : [{"id": 1, "name": "Kavga"},{"id": 2, "name": "Kum"},{"id": 3, "name": "Kan"},{"id": 4, "name": "Kılıç"}],
        "answer" : 2
    },
    {
        "id": 1,
        "question": "“Sezar’ın hakkı Sezar’a” sözü kime aittir?",
        "options" : [{"id": 1, "name": " Hz. İsa"},{"id": 2, "name": "Büyük İskender"},{"id": 3, "name": "Jül Sezar"},{"id": 4, "name": "Hz. Ömer"}],
        "answer" : 1
    },
    {
        "id": 2,
        "question": "“Onun sayesinde” sözündeki “saye” nin kelime anlamı nedir?",
        "options" : [{"id": 1, "name": "Rüzgar"},{"id": 2, "name": "Koltuk"},{"id": 3, "name": "Merdiven"},{"id": 4, "name": "Gölge"}],
        "answer" : 4
    },
    {
        "id": 3,
        "imageQuestion" : "http://i.imgur.com/IjNksdi.jpg",
        "question": "Yukarıki soruda boş bırakılan yere aşağıdakilerden hangisi gelmelidir? ",
        "options" : [{"id": 1, "name": "http://i.imgur.com/00GrLWS.jpg"},{"id": 2, "name": "http://i.imgur.com/7AcFQZD.jpg"},{"id": 3, "name": "http://i.imgur.com/MTxvW9C.jpg"},{"id": 4, "name": "http://i.imgur.com/wVtPpSk.jpg"}],
        "answer" : 1
    },
    {
        "id": 4,
        "question": "Dünyanın ilk haritasını çizen ünlü Türk denizcisi kimdir?",
        "options" : [{"id": 1, "name": "Piri Reis"},{"id": 2, "name": "Çaka Beyi"},{"id": 3, "name": "Fatih Sultan Süleyman"},{"id": 4, "name": "Picasso"}],
        "answer" : 1
    },
    {
        "id": 5,
        "question": "“Sinekli Bakkal” Romanının Yazarı Aşağıdakilerden Hangisidir?",
        "options" : [{"id": 1, "name": "Reşat Nuri Güntekin "},{"id": 2, "name": "Halide Edip Adıvar "},{"id": 3, "name": "Ziya Gökalp "},{"id": 4, "name": "Ömer Seyfettin"}],
        "answer" : 2
    },
    {
        "id": 6,
        "question": "Aşağıda Verilen İlk Çağ Uygarlıklarından Hangisi Yazıyı İcat Etmiştir? ",
        "options" : [{"id": 1, "name": "Hititler "},{"id": 2, "name": "Elamlar "},{"id": 3, "name": "Sümerler"},{"id": 4, "name": "Urartular "}],
        "answer" : 3
    },
    {
        "id": 7,
        "question": "Tsunami Felaketinde En Fazla Zarar Gören Güney Asya Ülkesi Aşağıdakilerden Hangisidir? ",
        "options" : [{"id": 1, "name": "Endonezya"},{"id": 2, "name": "Srilanka"},{"id": 3, "name": "Tayland"},{"id": 4, "name": "Hindistan"}],
        "answer" : 1
    },
    {
        "id": 8,
        "question": "2003 Yılında Euro Vizyon Şarkı Yarışmasında Ülkemizi Temsil Eden Ve Yarışmada Birinci Gelen Sanatçımız Kimdir? ",
        "options" : [{"id": 1, "name": "Grup Athena"},{"id": 2, "name": "Sertap Erener"},{"id": 3, "name": "Şebnem Paker"},{"id": 4, "name": "Ajda Pekkan"}],
        "answer" : 2
    },
    {
        "id": 9,
        "question": "Mustafa Kemal Atatürk’ün Nüfusa Kayıtlı Olduğu İl Hangisidir?",
        "options" : [{"id": 1, "name": "Bursa"},{"id": 2, "name": "Ankara"},{"id": 3, "name": "İstanbul"},{"id": 4, "name": "Gaziantep"}],
        "answer" : 4
    },
    {
        "id": 10,
        "question": "Aşağıdakilerden Hangisi Dünya Sağlık Örgütünün Kısaltılmış İsmidir? ",
        "options" : [{"id": 1, "name": "UHW"},{"id": 2, "name": "UNICEF"},{"id": 3, "name": "WHO"},{"id": 4, "name": "NATO"}],
        "answer" : 3
    },
    {
        "id": 11,
        "question": "Romen Rakamında Hangi Sayı Yoktur?",
        "options" : [{"id": 1, "name": "0"},{"id": 2, "name": "50"},{"id": 3, "name": "100"},{"id": 4, "name": "1000"}],
        "answer" : 1
    },
    {
        "id": 12,
        "question": "Bir Gün Kaç Saniyedir? ",
        "options" : [{"id": 1, "name": "86000"},{"id": 2, "name": "88600"},{"id": 3, "name": "86400"},{"id": 4, "name": "84800"}],
        "answer" : 3
    },
    {
        "id": 13,
        "question": "Hangi İlimizde Demiryolu Yoktur?  ",
        "options" : [{"id": 1, "name": "Batman"},{"id": 2, "name": "Kütahya"},{"id": 3, "name": "Aydın"},{"id": 4, "name": "Muğla"}],
        "answer" : 4
    },
    {
        "id": 14,
        "question": "Hangi Ülkenin İki Tane Başkenti Vardır?",
        "options" : [{"id": 1, "name": "Güney Afrika"},{"id": 2, "name": "Senegal"},{"id": 3, "name": "El Salvador"},{"id": 4, "name": "Venezuela"}],
        "answer" : 1
    },
    {
        "id": 15,
        "question": "Cevdet Bey Ve Oğulları Eseri Kime Aittir?",
        "options" : [{"id": 1, "name": "Orhan Pamuk"},{"id": 2, "name": "Yahya Kemal Bayatlı "},{"id": 3, "name": "Atilla İlhan "},{"id": 4, "name": "Samipaşazade Sezai "}],
        "answer" : 1
    },
    {
        "id": 16,
        "question": "Bir Sebepten Dolayı Tek Kulağına Küpe Takan Osmanlı Padişahı Kimdir?  ",
        "options" : [{"id": 1, "name": "Kanuni Sultan Süleyman "},{"id": 2, "name": "Yavuz Sultan Selim "},{"id": 3, "name": "Orhan Bey"},{"id": 4, "name": "Fatih Sultan Selim"}],
        "answer" : 2
    },
    {
        "id": 17,
        "question": "Aşağıdaki Ülkelerden Hangisinin Nüfusu Daha Fazladır  ",
        "options" : [{"id": 1, "name": "İspanya"},{"id": 2, "name": "Fransa "},{"id": 3, "name": "İngiltere"},{"id": 4, "name": "Almanya "}],
        "answer" : 4
    },
    {
        "id": 18,
        "question": "Üç Büyük Dince Kutsal Sayılan Şehir Hangisidir? ",
        "options" : [{"id": 1, "name": "Mekke"},{"id": 2, "name": "Kudüs"},{"id": 3, "name": "Roma"},{"id": 4, "name": "İstanbul"}],
        "answer" : 2
    },
    {
        "id": 19,
        "question": "Aspirinin Hammaddesi Nedir? ",
        "options" : [{"id": 1, "name": "Söğüt"},{"id": 2, "name": "Köknar"},{"id": 3, "name": "Kavak"},{"id": 4, "name": "Meşe"}],
        "answer" : 1
    }];
  $scope.again = [];
  $scope.date = new Date();
  $scope.tekrar = false;
  $scope.cevaplanmis = true;
  $scope.bos = true;
  $scope.accept = false;
  //Ayarlar
  $scope.oto = false;
  $scope.clock = true;
  $scope.progress = true;
  $scope.filter = true;
  //sınav süresi
  $scope.counter = 600; 
  //Kalan Süre ve Süre Bittiği zaman end() e yönlenme
  $scope.onTimeout = function(){
      if ($scope.counter == 0){
        $scope.counter = -1;
        $scope.accept = true;
        $scope.end();
      }else if($scope.counter > 0){
        $scope.counter--;
      }
      mytimeout = $timeout($scope.onTimeout,1000);
  }
  
  var mytimeout = $timeout($scope.onTimeout,1000);
  
        
  
  //Üzerinde bulunduğu sorunun idsi    
  $scope.onClickTab = function(question) {
    $scope.currentTab = question.id;
  }
  //Sonraki Soru
  $scope.onClickNB = function(currentTab, length) {
    if (currentTab < length - 1) {
      $scope.currentTab = currentTab + 1;
    }
  }
  //Önceki Soru
  $scope.onClickPB = function(currentTab, length) {
    if (currentTab > 0) {
      $scope.currentTab = currentTab - 1;
    }
  }
  //Filtreleme 
  $scope.show = function(i){
    if($scope.answers[i] != null && $scope.cevaplanmis && !$scope.tekrar){
      return true;
    }else if($scope.answers[i] == null && $scope.bos && !$scope.tekrar){
      return true;
    }else if($scope.again[i] && $scope.tekrar ){
      return true; 
    }
  }
  //İşaretlenen Soruları Tutma
  $scope.selected = function(ans,currentTab){
    $scope.answers[currentTab] = ans-1;
    if ($scope.oto && currentTab <19){
      $scope.currentTab = currentTab + 1;
    }
  }
  //Boş Geçilmemiş Soru Sayısı
  $scope.uniq = function(dizi){
    $scope.gecici = (dizi || $scope.answers);
    var count = 0;
    for (i = 0; i < $scope.gecici.length; i++) { 
      if ($scope.gecici[i] != null){
        count += 1;
      }
    }
    return count; 
  }
  
  $scope.repeat = function(id,confirmed){
    $scope.again[id]= confirmed;
  }
  //Sınavı Bitirme
  $scope.end = function(size){
    $scope.counter = -1;
    //modal
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      backdrop: 'static',
      resolve: {
        answers: function () {
          return $scope.answers;},
        questions: function() {
          return $scope.questions;},
        uniq: function () {
          return $scope.uniq($scope.answers);},
        accept: function () {
          return $scope.accept;}
      }
    });
  }

}]);

//modal
app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, $window,accept, answers, questions, uniq) {
  $scope.accept = accept;
  $scope.answers = answers;
  $scope.questions = questions;
  $scope.uniq = uniq;
  if(accept == true){
        $scope.correct = 0;
    $scope.empty = 5
    var sum = 0 ;
    var empty = 0;
    for (i = 0; i < $scope.answers.length; i++) { 
      if ($scope.answers[i] == $scope.questions[i].answer - 1){
        sum += 1;}
    }
    $scope.correct = sum;
  }
  
  $scope.ok = function () {
    $scope.accept = true;
    
    $scope.correct = 0;
    $scope.empty = 5
    var sum = 0 ;
    var empty = 0;
    for (i = 0; i < $scope.answers.length; i++) { 
      if ($scope.answers[i] == $scope.questions[i].answer - 1){
        sum += 1;}
    }
    $scope.correct = sum;
  };

  $scope.cancel = function () {
    if ($scope.accept){
      $window.location.reload();
    }else{
      $modalInstance.dismiss('cancel');}
  };
});

