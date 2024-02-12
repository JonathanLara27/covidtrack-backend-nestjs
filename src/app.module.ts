import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';
import { RolesModule } from './roles/roles.module';
import { CitasModule } from './citas/citas.module';
import { TriajeModule } from './triaje/triaje.module';
import { AuditTrailModule } from './audit-trail/audit-trail.module';

@Module({
  imports: [UsersModule, ChatModule, RolesModule, CitasModule, TriajeModule, AuditTrailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
