{
  showTime: function (self, time, fn, fn2) {
    var sibInputVal = self.siblings('input').val();
    var lang;

    yii_current_language == 'zh-CN' ? lang = 'zh-cn' : lang = 'en';


    if (self.hasClass('star')) {

      WdatePicker({
        lang: 'en',
        // maxDate: sibInputVal,
        // minDate: timeS(self).to,
        onpicking: function(db) {

          var dataArr = db.cal.newdate
          var star = dataArr.y + '-' + addZero(dataArr.M) + '-' + addZero(dataArr.d);

          fn && fn(star, sibInputVal)
        }
      });


    } else {
      WdatePicker({
        lang: 'en',
        // maxDate: timeS(self).form,
        // minDate: sibInputVal,
        onpicking: function(db) {

          var dataArr = db.cal.newdate
          var end = dataArr.y + '-' + addZero(dataArr.M) + '-' + addZero(dataArr.d);
          fn2 && fn2(sibInputVal, end);
        }
      })


    };

    function addZero(num) {
      return num < 10 ? '0' + num : num;
    }

    function timeS(self) {

      var val = self.siblings('input').val();

      var diff = 30 * 86400000;

      return {
        form: moment(moment().analysis(val) + diff).formate('YYYY-MM-DD'),
        to: moment(moment().analysis(val) - diff).formate('YYYY-MM-DD')
      };

    }
  }
}
