import { Request, Response } from "express";
import { getRepository } from "typeorm";
import News from "../models/News";

export default {
  async create(request: Request, response: Response) {
    const { title, description } = request.body;
    const newsRepository = getRepository(News);

    const createNew = newsRepository.create({
      title,
      description,
    });

    await newsRepository.save(createNew);

    return response.status(201).json(createNew);
  },
};
