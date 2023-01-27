import { PrismaClient } from ".prisma/client";
import { Prisma } from "@prisma/client";

const prismaClient = new PrismaClient();

export default prismaClient;