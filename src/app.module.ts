import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'containers-us-west-99.railway.app',
      port: 6174,
      username: 'postgres',
      password: 'kSnv76o9qiK4VbzifCfd',
      database: 'railway',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsuariosModule,
  ],
})
export class AppModule {}
