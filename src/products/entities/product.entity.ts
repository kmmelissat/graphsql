import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Product {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  @Column()
  name: string;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  @Column()
  price: number;

}
