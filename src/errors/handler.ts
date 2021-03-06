import { ErrorRequestHandler } from "express";

import { ValidationError } from "yup";

interface IValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    let errors: IValidationErrors = {};

    error.inner.forEach((err) => {
      errors[err.path] = err.errors; //hack, rocketseat
    });

    return response.status(400).json({ message: "Validation errors", errors });
  }

  console.error(error);

  return response.status(500).json({ message: "Internal server error" });
};

export default errorHandler;
