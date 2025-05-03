// Configuration CORS
const corsOptions = {
    origin: process.env.FRONTEND_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  };
  
  // middeware
  app.use(cors(corsOptions));
  app.use(express.json());