import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { Inventory } from './entities/inventory.entity';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  findAll(): Promise<Inventory[]> {
    return this.inventoryService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Inventory | undefined> {
    return this.inventoryService.findById(+id);
  }

  @Post()
  create(@Body() inventoryData: Partial<Inventory>): Promise<Inventory> {
    console.log('Received inventory data:', inventoryData);
    return this.inventoryService.create(inventoryData);
}



  // if more CRUD routes is needed
}
