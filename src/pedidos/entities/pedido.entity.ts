import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  cliente: string;

  @Column({ nullable: false })
  item: string;

  @Column({ type: 'int', nullable: false })
  quantidade: number;

  @Column({ nullable: true })
  observacoes: string;

  @Column({
    type: 'enum',
    enum: ['Em preparo', 'Pronto', 'Entregue'],
    default: 'Em preparo',
  })
  status: 'Em preparo' | 'Pronto' | 'Entregue';
}
