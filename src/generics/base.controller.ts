import { Controller, Get, Post, Delete, Put, Param, Body } from "@nestjs/common";
import { BaseService } from "./base.service";

@Controller()
export class BaseController<Entity, CreateDto, UpdateDto> {

    constructor(private baseService: BaseService<Entity, CreateDto, UpdateDto>) { }

    @Get('')
    async getAll(): Promise<Entity[]> {
        return await this.baseService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: number): Promise<Entity> {
        return await this.baseService.findById(id);
    }

    @Post('')
    async save(@Body() dto: CreateDto): Promise<Entity> {
        return await this.baseService.create(dto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() dto: UpdateDto): Promise<Entity> {
        return await this.baseService.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<boolean> {
        return await this.baseService.remove(id);
    }
}
