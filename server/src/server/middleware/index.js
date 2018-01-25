import bodyParser from "body-parser";
import cors from "cors";

// This is required as browsers like chrome doesnt like * as cross origin rule
const corsOptions = {
  origin: (origin, cb) => cb(null, true),
  credentials: true, // Allow cookies for our authentication
  preflightContinue: true, // Passes headers from preflight onwards
  exposedHeaders: [
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept"
  ],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Middleware
export default app => {
  app.use(cors(corsOptions));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};
