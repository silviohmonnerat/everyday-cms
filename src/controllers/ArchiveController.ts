import { Request, Response, NextFunction } from "express";

import { ArchiveData } from "../models/ArchiveModel";
import { prisma } from "../services/prisma";

export class ArchiveController {
  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  async index(request: Request, response: Response) {
    try {
      const archives = await prisma.achive.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });

      return response.render("archives/index", {
        archives,
      });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return Response
   */
  async show(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const archive = await prisma.achive.findFirst({
        where: {
          id: Number(id),
        },
      });

      if (!archive) {
        return response.render("archives/show", {
          message: "Archive not found!",
          messageClass: "danger",
        });
      }

      return response.render("archives/show", {
        archive,
      });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return Response
   */
  async create(request: Request, response: Response) {
    return response.render("archives/create");
  }

  /**
   * Store a newly created resource in storage.
   *
   * @return Response
   */
  async store(request: Request, response: Response) {
    try {
      const formData: ArchiveData = request.body;

      const catalogueNumber = Math.floor(1000 + Math.random() * 9000);

      const data = {
        catalogueNumber,
        author_id: 1,
        ...formData,
        length: Number(formData.length),
      };

      // const archive = await prisma.achive.create({
      //   data: {
      //     catalogueNumber,
      //     author_id: 1,
      //     title,
      //   },
      // });

      response.render("archives/create");
    } catch (error) {}
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return Response
   */
  async edit(request: Request, response: Response) {
    return response.render("archives/edit");
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  int  $id
   * @return Response
   */
  async update(request: Request, response: Response) {
    try {
      const { id } = request.query;
      const formData: ArchiveData = request.body;

      const archive = await prisma.achive.update({
        where: {
          id: Number(id),
        },
        data: {},
      });

      if (!archive) {
        return response.render("archives/edit", {
          message: "Archive not found!",
          messageClass: "danger",
        });
      }

      return response.render("archives/edit", {
        message: "Archive updated successfully!",
        messageClass: "success",
        archive,
      });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return Response
   */
  async destroy(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.query;

      const archive = await prisma.achive.delete({
        where: {
          id: Number(id),
        },
      });

      if (!archive) {
        return response.render("archives/index", {
          message: "Archive not found!",
          messageClass: "danger",
        });
      }

      return response.render("archives/index", {
        message: "Archive deleted successfully!",
        messageClass: "success",
      });
    } catch (error) {}
  }
}
