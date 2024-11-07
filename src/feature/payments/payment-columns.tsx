import { Payment } from '@/shared/types/payments';
import { ColumnDef } from '@tanstack/react-table';

export const paymentsColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
];
