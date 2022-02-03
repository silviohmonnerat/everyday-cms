import { Request, Response, NextFunction } from "express";
import { object, string } from "yup";

import { ArchiveData } from "../models/ArchiveModel";

export class ArchiveValidation {
  async store(request: Request, response: Response, next: NextFunction) {
    try {
      const { body } = request;

      const schema = object({
        body: object({
          title: string().required("Title is required!"),
          content: string().required("Content is required!"),
          soundType: string().required("Sound type is required!"),
          date: string().required("Date is required!"),
          season: string().required("Season is required!"),
          timeOfDay: string().required("Time of day is required!"),
          location: string().required("Location is required!"),
          recordist: string().required("Recordist is required!"),
          artist: string().required("Artist is required!"),
          length: string().required("Lenght is required!"),
          deviceRecorder: string().required("Device Recorder is required!"),
          formatQuality: string().required("Format Quality is required!"),
          accessAndLicense: string().required(
            "Access and license is required!"
          ),
          tags: string().required("Tags is required!"),
          media: string().required("Media is required!"),
        }),
      });

      await schema.validate(
        {
          body,
        },
        { abortEarly: false }
      );

      return next();
    } catch (err) {
      return response
        .status(500)
        .json({ type: err.name, message: err.message });
    }
  }
}
