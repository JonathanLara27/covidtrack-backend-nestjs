import { Module } from '@nestjs/common';
import { AuditTrailService } from './audit-trail.service';
import { AuditTrailController } from './audit-trail.controller';

@Module({
  controllers: [AuditTrailController],
  providers: [AuditTrailService],
})
export class AuditTrailModule {}
