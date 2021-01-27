import { Request, Response } from "express";
import { getRepository } from "typeorm";
import News from "../models/News";
//Yup for validate data
import * as Yup from "yup";
//Erros
import "express-async-errors";

import newViews from "../views/news_views";

export default {
  async index(request: Request, response: Response) {
    const newsRepository = getRepository(News);
    const findNews = await newsRepository.find({
      order: {
        createdAt: "DESC",
        id: "ASC",
      },
    });

    return response.json(newViews.renderAll(findNews));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const newsRepository = getRepository(News);
    const findNew = await newsRepository.findOneOrFail(id);

    return response.json(newViews.render(findNew));
  },

  async create(request: Request, response: Response) {
    const { title, description } = request.body;
    const newsRepository = getRepository(News);

    const data = {
      title,
      description,
    };

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const createNew = newsRepository.create(data);

    await newsRepository.save(createNew);

    return response.status(201).json(createNew);
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const newsRepository = getRepository(News);
    const findNew = await newsRepository.delete(id);

    return response.status(200).json(findNew);
  },
};
