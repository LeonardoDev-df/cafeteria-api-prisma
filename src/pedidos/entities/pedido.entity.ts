import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cliente: string;

  @Column()
  item: string;

  @Column()
  quantidade: number;

  @Column({ nullable: true })
  observacoes: string;

  @Column({ default: 'Em preparo' })
  status: 'Em preparo' | 'Pronto' | 'Entregue';
}
