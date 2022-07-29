const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(express.static("build"));
morgan.token("body", (req, res) => JSON.stringify(req.body));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const id = +req.params.id;
  const person = persons.find((person) => person.id === id);
  res.json(person);
});

app.get("/info", (req, res) => {
  const people = persons.length;
  const currentDate = new Date();
  res.send(
    `<div><p>Phonebook has info for ${people} people</p><p>${date}</p></div>`
  );
});

app.delete("/api/persons/:id", (req, res) => {
  const id = +req.params.id;
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const alreadyExists = persons.find((person) => person.name === req.body.name);

  if (alreadyExists) {
    return res.status(400).json({
      error: "Name must be unique.",
    });
  }

  if (!req.body.name || !req.body.number) {
    return res.status(400).json({
      error: "Name or number is missing.",
    });
  }

  const newPerson = {
    id: Math.random(),
    name: req.body.name,
    number: req.body.number,
  };
  persons = persons.concat(newPerson);
  res.json(newPerson);
});

app.put("/api/persons/:id", (req, res) => {
  const id = +req.body.id;
  const updatingPerson = {
    ...req.body,
    number: req.body.number,
  };
  persons = persons.map((person) =>
    person.id !== id ? person : updatingPerson
  );
  res.json(updatingPerson);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
