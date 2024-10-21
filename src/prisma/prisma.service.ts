import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CONSOLE_TEXTS } from 'src/constants/constants';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    this.$connect()
      .then(() => console.log(CONSOLE_TEXTS.CONNECT_TO_DB))
      .catch((err) => console.log(err));
  }
}
