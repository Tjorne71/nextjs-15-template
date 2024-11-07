'use client';
import { paymentsColumns } from '@/feature/payments/payment-columns';
import { DataTable } from '@/shared/components/data-table';
import { Payment } from '@/shared/types/payments';
import { Button } from '@/shared/ui/button';
import { useState } from 'react';

export default function PaymentsPage() {
  const [payments, setPayments] = useState<Payment[]>([
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
  ]);

  const addPayment = () => {
    // Generate random data for a new payment
    const newPayment: Payment = {
      id: Math.random().toString(36).substring(2, 9), // Random 7-character ID
      amount: Math.floor(Math.random() * 500) + 50, // Random amount between 50 and 550
      status: Math.random() > 0.5 ? 'success' : 'pending', // Randomly choose status
      email: `user${Math.floor(Math.random() * 1000)}@example.com`, // Random email
    };

    setPayments((prevPayments) => [...prevPayments, newPayment]);
  };

  return (
    <div className='container mx-auto py-10'>
      <Button onClick={addPayment}>Add Payment</Button>
      <DataTable columns={paymentsColumns} data={payments} />
    </div>
  );
}
