import express from "express";
import http from "http";

import middleware from "./middleware";
import routes from "./routes";

export const app = express();
export const server = http.Server(app);

// Setup Middleware
middleware(app);

// Setup Routes
// NOTE - these passing around io is annoying but circular importing is worse
routes(app);
