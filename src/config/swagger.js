import { define } from "superstruct"
import swaggerJSDoc from "swagger-jsdoc"

const options = {
  definition: {
    openai: "3.0.0",
    info: {
      title: "API 문서",
      version: "1.0.0",
    },
  }, 
  apis:['./route/**/*.js']
};

export const swaggerSpec = swaggerJSDoc(options);