import { Router } from "express";
import { saveAppointment, updateAppointment, cancellAppointment, getAppointments } from "./appointment.controller.js";
import { createAppointmentValidator, updateAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);

router.get("/", getAppointments);

router.patch("/updateAppointment/:uid", updateAppointmentValidator, updateAppointment)

router.patch("/cancelAppointment/:uid", cancellAppointment)

export default router;