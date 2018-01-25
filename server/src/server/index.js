import express from "express";
import http from "http";

const server = require("./app").server;

const port = process.env.PORT || 2000;

export const start = () => {
  server.listen(port, "0.0.0.0", () => {
    const API_VERSION = process.env.npm_package_version;
    console.log(`Todos service listening on ${port}`);
    console.log(`Api version: ${API_VERSION}`);
  });
};
