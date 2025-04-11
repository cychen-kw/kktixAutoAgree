$(document).ready(function () {
    console.log("IBON MODE");
    setTimeout(() => {
        $('#ctl00_ContentPlaceHolder1_DataGrid_ctl02_AMOUNT_DDL').val('1').trigger('change');
        $('#ctl00_ContentPlaceHolder1_CHK').focus();

        $('#ctl00_ContentPlaceHolder1_CHK').on('keydown', function (e) {
            if (e.key === 'Enter') {
              $('#Next').click();
            }
          });
    }, 500);
});
