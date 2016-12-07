$(document).ready(function() {
  console.log('script ready');

  $('#bob').on('click', function() {
    console.log('click');

    var testData = {test: 'test'};
    $.ajax({
      type: 'POST',
      url: '/bob',
      data: testData,
      success: function(response) {
        console.log('server said:', response);
      }
    });
  });
});
