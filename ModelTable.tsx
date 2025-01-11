import { useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  getPaginationRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { AIModel } from '../types';
import { ArrowUpDown } from 'lucide-react';
import clsx from 'clsx';

const columnHelper = createColumnHelper<AIModel>();

const columns = [
  columnHelper.accessor('name', {
    header: ({ column }) => {
      return (
        <button
          className="flex items-center gap-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className="h-4 w-4" />
        </button>
      );
    },
  }),
  columnHelper.accessor('type', {
    header: 'Type',
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: ({ row }) => (
      <span
        className={clsx(
          'px-2 py-1 rounded-full text-sm',
          row.original.status === 'active' && 'bg-green-100 text-green-800',
          row.original.status === 'inactive' && 'bg-gray-100 text-gray-800',
          row.original.status === 'training' && 'bg-yellow-100 text-yellow-800'
        )}
      >
        {row.original.status}
      </span>
    ),
  }),
  columnHelper.accessor('accuracy', {
    header: 'Accuracy',
    cell: ({ row }) => `${row.original.accuracy}%`,
  }),
  columnHelper.accessor('createdAt', {
    header: 'Created At',
    cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
  }),
];

interface ModelTableProps {
  data: AIModel[];
}

export function ModelTable({ data }: ModelTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <input
          type="text"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search models..."
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="rounded-lg border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </button>
        </div>
        <span className="text-sm text-gray-700">
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}
        </span>
      </div>
    </div>
  );
}