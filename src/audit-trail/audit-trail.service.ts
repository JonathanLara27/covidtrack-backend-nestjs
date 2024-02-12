import { Injectable } from '@nestjs/common';
import { CreateAuditTrailDto } from './dto/create-audit-trail.dto';
import { UpdateAuditTrailDto } from './dto/update-audit-trail.dto';

@Injectable()
export class AuditTrailService {
  create(createAuditTrailDto: CreateAuditTrailDto) {
    return 'This action adds a new auditTrail';
  }

  findAll() {
    return `This action returns all auditTrail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auditTrail`;
  }

  update(id: number, updateAuditTrailDto: UpdateAuditTrailDto) {
    return `This action updates a #${id} auditTrail`;
  }

  remove(id: number) {
    return `This action removes a #${id} auditTrail`;
  }
}
