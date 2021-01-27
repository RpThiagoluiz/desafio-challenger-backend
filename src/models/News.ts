import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("news")
export default class News {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
}
