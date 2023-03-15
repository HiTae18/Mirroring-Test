import express from "express";
import { userRouter, categoryRouter } from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", userRouter);
app.use("/api", categoryRouter);

// 실험 페이지
app.get("/", (req, res) => {
  res.send("<h1>백엔드 페이지<h1>");
});

export { app };
