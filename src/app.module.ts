import { Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeliculasModule } from './peliculas/peliculas.module';
import { PokemonsModule } from './pokemons/pokemons.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true,}), 
    TypeOrmModule.forRoot({
      name:'base1',
      type:'mysql',
      host:process.env.URL,
      port:3306,
      username:process.env.USUARIO,
      password:process.env.PASSWORD,
      database: process.env.DBNAME,
      autoLoadEntities:true,//Esta es la mejor opción para que coja sólo las que haya en módulo
      synchronize:true
    }),
    TypeOrmModule.forRoot({
      name:'base2',
      type:'mysql',
      host:process.env.URL,
      port:3306,
      username:process.env.USUARIO,
      password:process.env.PASSWORD,
      database: process.env.DBNAME2,
      autoLoadEntities:true,//Esta es la mejor opción para que coja sólo las que haya en módulo
      synchronize:true
    }),
    PeliculasModule,
    PokemonsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
