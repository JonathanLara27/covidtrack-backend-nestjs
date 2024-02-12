import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {

  private lg= new Logger('NeHox');

  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>
  ) {
  }

  async create(createRoleDto: CreateRoleDto): Promise<Role | HttpException> {
    this.lg.debug('module ROL: createRoleDto: '+JSON.stringify(createRoleDto));
    const newRole = this.roleRepository.create(createRoleDto);
    try {
      return await this.roleRepository.save(newRole);
    } catch (error: any) {
      this.lg.error('module ROL: createRoleDto: '+error);
      return new HttpException(`Error al crear el rol: ${error}`, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<Role[] | HttpException>  {
    this.lg.debug('findAll');
    return await this.roleRepository.find();
  }

  async findOne(id: number): Promise<Role | HttpException>  {
    this.lg.debug('Module ROL: findOne: '+id);
    try {
      return await this.roleRepository.findOne({where: {id}});
    } catch (error) {
      this.lg.error('Module ROL: findOne: '+error);
      return new HttpException('Error al buscar el rol', HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    this.lg.debug('Module ROL: update: '+id);
    const roleToUpdate = await this.findOne(id);
    if(!roleToUpdate){
      this.lg.error('Module ROL: update: Rol no encontrado');
      return new HttpException('Rol no encontrado', HttpStatus.NOT_FOUND);
    }
    return this.roleRepository.update(id, updateRoleDto);
  }

  // async remove(id: number) {
  //   this.lg.debug('Module ROL: remove: '+id);
  //   const roleToRemove = await this.findOne(id);
  //   if(!roleToRemove){
  //     return new HttpException('Rol no encontrado', HttpStatus.NOT_FOUND);
  //   }
  //   //asignamos false al campo status
  //   (roleToRemove as Role).status=false;
  //   //actualizamos campo deletedAt le ponemos el CURRENT_TIMESTAMP
  //   (roleToRemove as Role).deletedAt=new Date();
  //   return this.roleRepository.update(id, roleToRemove as Role);
  //   // return this.roleRepository.delete({id});
  // }
}
