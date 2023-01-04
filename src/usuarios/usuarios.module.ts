import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Barrio } from './entities/barrio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Barrio])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
