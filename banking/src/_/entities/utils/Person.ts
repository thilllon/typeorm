import { BaseEntity, Column, PrimaryColumn } from "typeorm";

export class Person extends BaseEntity {
  // @PrimaryColumn({ type: 'uuid' })
  // id: string;
  @PrimaryColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({ unique: true, length: 10 })
  card_number: string;

  @Column({ type: "numeric" })
  balance: number;

  @Column({ name: "active", default: true }) // 실제 서버에는 'active' 필드로 저장됨
  is_active: boolean;
}
