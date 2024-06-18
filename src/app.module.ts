import {
  Module,
} from "@nestjs/common";

import { TypeOrmModule } from "@nestjs/typeorm";
import { DbConfigService } from "./config/db.config.service";
import { ConfigModule } from "@nestjs/config";
import { CidadeModule } from "./modules/cidades/cidade.module";
import { CategoriaModule } from "./modules/categorias/categoria.module";
import { ClienteModule } from "./modules/clientes/cliente.module";
import { PedidoModule } from "./modules/pedidos/pedido.module";
import { ProdutoModule } from "./modules/produtos/produto.module";
import { PedidoProdutoModule } from "./modules/pedidos_produtos/pedido_produto.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: DbConfigService,
      inject: [DbConfigService],
    }),
    CidadeModule, CategoriaModule, ClienteModule, PedidoModule, ProdutoModule, PedidoProdutoModule
    
  ],
  providers: [
  ],
})
export class AppModule { }
