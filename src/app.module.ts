import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';
import { RolesModule } from './roles/roles.module';
import { CitasModule } from './citas/citas.module';
import { TriajeModule } from './triaje/triaje.module';
import { AuditTrailModule } from './audit-trail/audit-trail.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env.development.local', '.env.production.local'] }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    UsersModule, ChatModule, RolesModule, CitasModule, TriajeModule, AuditTrailModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
