
/*!
 * Module dependencies.
 */

exports.index = function (req, res) {
  inboxes = [
  					{
  						name : 'Steven Koening',
  						content : 'In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do.',
  						attachment: 'false',
              date : '12-April-2017'
  					},
  					{ 
  						name : 'Rubin Spinella',
  						content : 'The wise man therefore always holds in these matters to this principle of selection.',
  						attachment: 'true',
              date : '12-April-2017'
  					}
  			];
  res.render('home/index', {
    title: 'Inbox',
    inboxes : inboxes
  });
};
