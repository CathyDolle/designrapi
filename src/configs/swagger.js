export default {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Designr",
      version: "0.1.0",
      description: "Une petite description.",
      /*
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Designr",
        url: "",
        email: "",
      }
      */
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: [
    './src/controllers/**/*.js'
  ]
}