import express from "express";

import { EMAILS } from "./data";

const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const app = express();

app.get("/emails", async (req, res) => {
console.log('GETS ALL')
  await new Promise((resolve) => {
    setTimeout(resolve, randomIntFromInterval(500, 1500));
  });

  const status = req.query.status as string | null;

  const emails = status
    ? EMAILS.filter((email) => email.status === status)
    : EMAILS;

  res.json(emails);
});

app.get("/emails/:id", async (req, res) => {
  await new Promise((resolve) => {
    setTimeout(resolve, randomIntFromInterval(500, 1500));
  });

  const id = parseInt(req.params.id);
  console.log('GETS ONE '+id)

  const email = EMAILS.find((email) => email.id === id);

  if (!email) res.status(404).json({ error: "Email not found" });

  res.json(email);
});

app.delete("/emails/:id", async (req, res) => {
  await new Promise((resolve) => {
    setTimeout(resolve, randomIntFromInterval(500, 1500));
  });

  const id = parseInt(req.params.id);

  const emailIndex = EMAILS.findIndex((email) => email.id === id);

  if (emailIndex === -1) res.status(404).json({ error: "Email not found" });

  EMAILS.splice(emailIndex, 1);

  res.status(204).send();
});

app.listen(5001);
