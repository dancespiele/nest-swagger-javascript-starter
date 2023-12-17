import { Controller, Dependencies, Get } from '@nestjs/common';
import { HelloService } from './hello.service';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger'

@ApiTags('Hello')
@Controller()
@Dependencies(HelloService)
export class HelloController {
  constructor(helloService) {
    this.helloService = helloService;
  }

  @Get()
  @ApiOperation({
    description: 'Get Hello World!',
  })
  @ApiResponse({
    status: 200,
    description: 'Return hello world',
  })
  getHello() {
    return this.helloService.getHello();
  }
}
