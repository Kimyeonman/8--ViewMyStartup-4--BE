import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { router as corps } from './route/corpRoute.js';
import { router as compares } from './route/compareRoute.js';
import { router as compareTotal } from './route/compareTotalRoute.js';
//투자금 등등은 너무 커서 BigInt 로 세팅한거 조회하기 위한 작업
BigInt.prototype.toJSON = function () { 
  return this.toString(); 
};

const app = express();

app.use(express.json());
app.use(corps);
app.use(compares);
app.use(compareTotal);


app.listen(process.env.PORT || 3000, () => console.log("Server Started"));
