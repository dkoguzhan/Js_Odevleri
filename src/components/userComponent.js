import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("user component loaded.")

let logger = new MongoLogger()

let userService = new UserService(logger)
let user = new User(1,"Oğuzhan","Demirkapı","Eskişehir")

userService.add(user)