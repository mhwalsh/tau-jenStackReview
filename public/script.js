$(document).ready(function() {
  console.log('script ready');

  $('#bob').on('click', function() {
    console.log('click');

    var bobData = {bob: 'bob'};

    $.ajax({
      type: 'POST',
      url: '/bob',
      data: bobData,
      success: function(response) {
        console.log('server said:', response);
      }
    });
  });
});
