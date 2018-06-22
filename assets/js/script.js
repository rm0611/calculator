
function calculateHour() {
    var month = document.getElementById('monthly').value;
    var hours = document.getElementById('hours').value;
    if (month == null || month == '' || hours == null || hours == '') {
      window.alert('Please only type in integers in the text field!');
    } else {
      var wage = month / hours;
      var wagetxt;
      wagetxt = 'Your hourly wage is ' + wage + ' dollars';
      document.getElementById('myWage').innerHTML = wagetxt;
    }
  }

  function calculateHourJp() {
    var monthjp = document.getElementById('monthlyjp').value;
    var hoursjp = document.getElementById('hoursjp').value;
    if (monthjp == null || monthjp == '' || hoursjp == null || hoursjp == '') {
      window.alert('整数で入力してください！')
    } else {
      var wagejp = monthjp / hoursjp;
      var wagetxtjp;
      wagetxtjp = 'あなたの自給は' + wagejp + ' 円です。';
      document.getElementById('myWageJp').innerHTML = wagetxtjp;
    }
  }