import { FC } from "react"
import TransactionForm from "../components/TransactionForm"
import { instance } from "../api/axios.api"

import TransactionTable from "../components/TransactionTable"
import { toast } from "react-toastify"
import { IResponseTransactionLoader, ITransaction } from "../types/types"
import { useLoaderData } from "react-router-dom"
import { formatToUSD } from "../helpers/currency.helper"
import Chart from "../components/Chart"

export const transactionLoader = async () => {
  const categories = await instance.get<ICategory[]>('/categories')
  const transactions = await instance.get<ITransaction[]>('/transactions')
  const totalIncome = await instance.get<number>('/transactions/income/find')
  const totalExpense = await instance.get<number>('/transactions/expense/find')
    
  const data = {
    categories: categories.data,
    transactions: transactions.data,
    totalIncome: totalIncome.data,
    totalExpense: totalExpense.data,
  }
  return data
}

export const transactionAction = async ({ request }: any) => {
  switch (request.method) {
    case 'POST': {
      const formData = await request.formData()
      const newTransaction = {
        title: formData.get('title'),
        amount: +formData.get('amount'),
        category: formData.get('category'),
        type: formData.get('type'),
      }

      await instance.post('/transactions', newTransaction)
      toast.success('Transaction added.')
      return null
    }
    case 'DELETE': {
      const formData = await request.formData()
      const transactionId = formData.get('id')
      await instance.delete(`/transactions/transaction/${transactionId}`)
      toast.success('Transaction deleted.')
      return null
    }
  }
}

const Transanctions: FC = () => {
  const { totalExpense, totalIncome } = useLoaderData() as IResponseTransactionLoader

  return (
    <>
      <div className="grid grid-cols-3 gap-4 mt-4 items-start">
        {/**Add transaction Fort */}
        <div className="col-span-2 grid"><TransactionForm /></div>

        {/* Static blocks */}
        <div className="rounded-md bg-slate-800 p-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-md text-center font-bold uppercase">
                Total Income
              </p>
              <p className="mt-2 rounded-sm bg-green-600 p-1 text-center">
                {formatToUSD.format(totalIncome)}
              </p>
            </div>
            <div>
              <p className="text-md text-center font-bold uppercase">
                Total Expense
              </p>
              <p className="mt-2 rounded-sm bg-red-500 p-1 text-center">
              {formatToUSD.format(totalExpense)}
              </p>
            </div>
          </div>
          <>
          <Chart totalExpense={totalExpense} totalIncome={totalIncome}/>
          </>
        </div>
      </div>

      {/* Transaction Table */}
      <h1 className="my-5">
        <TransactionTable limit={5}/>
        </h1>
    </>
  )
}

export default Transanctions
