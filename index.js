function openFeed(event, feedName) {
  const tabContent = document.getElementsByClassName('tab-content');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  const tabLinks = document.getElementsByClassName('tab-links');
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(' active', '');
  }
  document.getElementById(feedName).style.display = 'block';
  event.currentTarget.className += ' active';
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Date Picker
$(function () {
  var start = moment().subtract(29, 'days');
  var end = moment();

  function cb(start, end) {
    $('#reportrange span').html(
      start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY')
    );
  }

  $('#reportrange').daterangepicker(
    {
      startDate: start,
      endDate: end,
      ranges: {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [
          moment().subtract(1, 'month').startOf('month'),
          moment().subtract(1, 'month').endOf('month'),
        ],
      },
    },
    cb
  );

  cb(start, end);
});

// $('#demo').daterangepicker(
//   {
//     startDate: '01/18/2022',
//     endDate: '01/24/2022',
//   },
//   function (start, end, label) {
//     console.log(
//       'New date range selected: ' +
//         start.format('YYYY-MM-DD') +
//         ' to ' +
//         end.format('YYYY-MM-DD') +
//         ' (predefined range: ' +
//         label +
//         ')'
//     );
//   }
// );

// $('#demo').daterangepicker(
//   {
//     timePicker: true,
//     ranges: {
//       Today: ['2022-01-24T22:10:10.357Z', '2022-01-24T22:10:10.357Z'],
//       Yesterday: ['2022-01-23T22:10:10.357Z', '2022-01-23T22:10:10.357Z'],
//       'Last 7 Days': ['2022-01-18T22:10:10.357Z', '2022-01-24T22:10:10.357Z'],
//       'Last 30 Days': ['2021-12-26T22:10:10.357Z', '2022-01-24T22:10:10.357Z'],
//       'This Month': ['2022-01-01T00:00:00.000Z', '2022-01-31T23:59:59.999Z'],
//       'Last Month': ['2021-12-01T00:00:00.000Z', '2021-12-31T23:59:59.999Z'],
//     },
//     startDate: '01/18/2022',
//     endDate: '01/24/2022',
//   },
//   function (start, end, label) {
//     console.log(
//       "New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')"
//     );
//   }
// );
