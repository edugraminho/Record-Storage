const Person = require("../models/Person");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const { name, email, phone } = req.body;

  const person = { name, email, phone };

  if (!name) {
    res.status(422);
  }

  try {
    await Person.create(person);
    return res.status(201).json({ message: "Successfully entered person" });
  } catch (err) {
    return res.status(400).json({ error: "Failed to insert person" });
  }
});

router.get("/", async (req, res) => {
  try {
    const people = await Person.find();

    return res.status(200).json(people);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

router.post("/find", async (req, res) => {
  const name = req.body.name;
  try {
    const person = await Person.findOne({ name: name });

    if (!person) {
      return res.status(422).json({ message: "Person not found" });
    }

    return res.status(200).json(person);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

module.exports = router;
