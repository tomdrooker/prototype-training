const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/juggling-balls-answer', function(req, res) {
  let jugglingBalls = req.session.data['juggling-balls']

  if (jugglingBalls == "3 or more") {
    res.redirect('/juggling-trick')
  } else {
    res.redirect('/ineligible')
  }
});

router.post('/over-18-answer', function(req, res) {
  let over18 = req.session.data['over-18']

  if (over18 == 'Yes') {
    res.redirect('/juggling-balls')
  } else {
    res.redirect('/ineligible')
  }
})

module.exports = router
