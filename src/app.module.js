import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module'
import { RouterModule } from '@nestjs/core'

@Module({
  imports: [
    HelloModule,
    RouterModule.register([{
      path: 'hello',
      module: HelloModule,
    }])
  ]
})
export class AppModule {}
