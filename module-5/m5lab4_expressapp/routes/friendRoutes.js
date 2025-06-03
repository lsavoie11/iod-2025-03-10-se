const express = require("express");
const router = express.Router();
const friends = require("../models/friends");

// TODO - #1: Add support to the 'filter' endpoint for a new query parameter 'letter' which filters friends by starting letter

// TODO - #2: Modify the 'info' route to only return the user-agent, content-type and accept header data

// TODO - #3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter

// TODO - #4: Complete the PUT route which will update data for an existing friend

// default endpoint, gets all friends
router.get("/", (req, res) => {
  res.json(friends);
});

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
// Part 1
router.get("/filter", (req, res) => {
  console.log(req.query);
  let filterGender = req.query.gender;
  let filterLetter = req.query.letter;
  let matchingFriends = [...friends];

  if (filterGender) {
    matchingFriends = matchingFriends.filter(
      (friend) => friend.gender == filterGender
    );
  }
  if (filterLetter) {
    matchingFriends = matchingFriends.filter(
      (friend) =>
        friend.name &&
        friend.name[0].toLowerCase() === filterLetter.toLowerCase()
    );
  }

  if (matchingFriends.length > 0) {
    res.status(200).json(matchingFriends);
  } else {
    res.status(404).json({ error: "No friends matching the given filters" });
  }
});

// Part 2
router.get("/info", (req, res) => {
  const {
    "user-agent": userAgent,
    "content-type": contentType,
    accept,
  } = req.headers;
  res.json({ "user-agent": userAgent, "content-type": contentType, accept });
});

// Part 3
router.get("/:id", (req, res) => {
  let friendId = req.params.id;
  let friend = friends.find((f) => String(f.id) === String(friendId));
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: `No friend found with ID ${friendId}` });
  }
});

// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post("/", (req, res) => {
  let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
  console.log(newFriend); // 'body' will now be an object containing data sent via the request body

  // we can add some validation here to make sure the new friend object matches the right pattern
  if (!newFriend.name || !newFriend.gender) {
    res
      .status(500)
      .json({ error: "Friend object must contain a name and gender" });
    return;
  } else if (!newFriend.id) {
    newFriend.id = friends.length + 1; // generate an ID if one is not present
  }

  // if the new friend is valid, add them to the list and return the successfully added object
  friends.push(newFriend);
  res.status(200).json(newFriend);
});

// Part 4
router.put("/:id", (req, res) => {
  let friendId = req.params.id;
  let updatedFriend = req.body;

  // Basic validation
  if (!updatedFriend.name || !updatedFriend.gender) {
    return res
      .status(400)
      .json({ error: "Friend object must contain a name and gender" });
  }

  let index = friends.findIndex((f) => String(f.id) === String(friendId));
  if (index !== -1) {
    updatedFriend.id = friends[index].id;
    friends[index] = updatedFriend;
    res.status(200).json(updatedFriend);
  } else {
    res.status(404).json({ error: `No friend found with ID ${friendId}` });
  }
});

module.exports = router;
