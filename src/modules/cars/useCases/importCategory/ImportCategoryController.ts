import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryControler {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  handle(request: Request, response: Response) {
    const { file } = request;

    this.importCategoryUseCase.execute(file);

    return response.status(201).send();
  }
}

export { ImportCategoryControler };
