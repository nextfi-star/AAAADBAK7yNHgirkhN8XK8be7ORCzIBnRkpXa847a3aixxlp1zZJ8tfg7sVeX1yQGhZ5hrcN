"use client";
import { useUserStore } from "@/hooks/useUserData";
import { useThemeStore } from "@/store/useChatStore";
import { getInvestHistory } from "@/utils/api";
import {
  Avatar,
  Button,
  ChipProps,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Pagination,
  Selection,
  SortDescriptor,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from "@heroui/react";
import { useTranslations } from "next-intl";
import React, { useCallback, useEffect, useState } from "react";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { usersDataI } from "./data";
import { industries } from "./Invest_steps";
import { capitalize } from "./utils";
import { VerticalDotsIcon } from "./VerticalDotsIcon";

const statusColorMap: Record<string, ChipProps["color"]> = {
  sent: "success",
  denied: "danger",
  pending: "warning",
};
type HistoryItem = {
  id: number;
  type: string;
  coin: string;
  amount: number;
  create_time: number;
  // можно добавить другие поля, возвращаемые сервером
};
const INITIAL_VISIBLE_COLUMNS = [
  "industry",
  "amount",
  "period",
  "current amount",
  "status",
];
type User = (typeof usersDataI)[0];

export const getStatus = (numeric_status: number) => {
  switch (numeric_status) {
    case 0:
      return <span className=" text-green-400">COMPLETED</span>;
    case 1:
      return <span className="text-yellow-400">IN PROGRESS</span>;
    default:
      return <span>SUCCESS</span>;
  }
};

export default function Invest_Table({
  title = "Investment history",
}: {
  title?: string;
}) {
  const { csrf } = useUserStore();
  const { invests } = useThemeStore();
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [currentInvests, setCurrentInvests] = useState([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const fetchHistory = useCallback(async () => {
    if (!csrf) return;
    setLoading(true);
    setError("");

    const result = await getInvestHistory({
      coin: "BTC",
      csrf,
      type: "invest",
    });
    if (result.success) {
      setHistory(result.data);
    } else {
      setError(result.message);
    }
    setLoading(false);
  }, [csrf]);

  useEffect(() => {
    fetchHistory();
    console.log(history);
  }, [fetchHistory]);

  const [filterValue, setFilterValue] = React.useState("");
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });

  const [page, setPage] = React.useState(1);
  const hasSearchFilter = Boolean(filterValue);

  const t = useTranslations("invest");

  const columnsDataI = [
    { name: t("table_header_industry"), uid: "industry", sortable: true },
    { name: t("table_header_amount"), uid: "amount", sortable: true },
    { name: t("table_header_period"), uid: "period", sortable: true },
    {
      name: t("table_header_current_amount"),
      uid: "current amount",
      sortable: true,
    },
    { name: t("table_header_status"), uid: "status", sortable: true },
  ];
  const statusOptionsDataI = [
    { name: "IN PROCESS", uid: "in process" },
    { name: "SUCCESS", uid: "Succsess" },
    { name: "WITHDRAWN", uid: "Withdrawn" },
  ];

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columnsDataI;

    return columnsDataI.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  console.log(headerColumns);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...history];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.type.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptionsDataI.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.type)
      );
    }

    return filteredUsers;
  }, [history, filterValue, statusFilter]);

  const pages = Math.ceil(invests.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return invests.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((item: any, columnKey: React.Key) => {
    // const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "industry":
        return (
          <span className="md:text-[17px] flex items-center">
            <Avatar
              src={industries.find((val) => val.id === item.packet.id)!.avatar}
              classNames={{
                base: "bg-transparent",
              }}
            />
            {item.packet.name}
          </span>
        );
      case "amount":
        return (
          <div className="flex flex-col items-start gap-[5px] md:text-[17px]">
            {/* <Snippet
								symbol=''
								className='text-bold md:text-[20px] text-small capitalize overflow-ellipsis whitespace-nowrap overflow-hidden bg-transparent px-0'
							> */}
            {item.amount}
            {/* </Snippet> */}
            {/* <span className='md:text-[20px] font-medium text-[#BDBDBD]'>
							{user.subAmount}
						</span> */}
          </div>
        );
      case "period":
        return (
          <span className="md:text-[17px]"> {item.rtime / 24 / 60 / 60}</span>
        );
      case "current amount":
        return (
          <span className="md:text-[17px]">
            {" "}
            {(
              (item.amount / 100) *
                Math.min(
                  ((new Date().getTime() / 1000 - item.create_time) /
                    item.rtime) *
                    100,
                  100
                ) +
              item.amount
            ).toFixed(5)}{" "}
          </span>
        );
      case "status":
        return (
          <span className="md:text-[17px]"> {getStatus(item.status)}</span>
        );
      case "actions":
        return (
          <div className="relative flex justify-center items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="view">View</DropdownItem>
                <DropdownItem key="edit">Edit</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return <></>;
    }
  }, []);

  console.log("Invests table: ", invests);

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end p-[25px_20px_0px]">
          <h1 className="text-[20px] xl:text-[32px]">{title}</h1>
          <div className="flex gap-3">
            {/* <Dropdown>
							<DropdownTrigger className='hidden sm:flex'>
								<Button
									endContent={<ChevronDownIcon className='md:!text-[20px]' />}
									variant='flat'
								>
									Status
								</Button>
							</DropdownTrigger>
							<DropdownMenu
								disallowEmptySelection
								aria-label='Table Columns'
								closeOnSelect={false}
								selectedKeys={statusFilter}
								selectionMode='multiple'
								onSelectionChange={setStatusFilter}
							>
								{statusOptionsDataI.map(status => (
									<DropdownItem
										key={status.uid}
										className='capitalize md:!text-[20px]'
									>
										{capitalize(status.name)}
									</DropdownItem>
								))}
							</DropdownMenu>
						</Dropdown> */}
            <Dropdown>
              <DropdownTrigger className="flex">
                <Button
                  endContent={<ChevronDownIcon className="md:!text-[20px]" />}
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columnsDataI.map((column, index) => (
                  <DropdownItem
                    key={column.uid}
                    className="capitalize md:text-[20px] "
                  >
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    history.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-center items-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
      </div>
    );
  }, [items.length, page, pages, hasSearchFilter]);

  return (
    <Table
      isHeaderSticky
      aria-label="-Datatable for NextFi-"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      title="Investment history"
      classNames={{
        table: "!bg-transparent",
        base: "dark:!bg-[#1e1e1e66] shadow-medium dark:shadow-none !bg-[#FFFFFF66] rounded-[30px] px-[25px]",
        tbody: "!shadow-none",
        wrapper: "max-h-[503px] !bg-transparent shadow-none",
        tr: "bg-transparent !outline-0 !border-0 !shadow-none",
        td: "!pt-[17px] text-left border-0 border-b border-solid border-white",
        th: "text-left md:text-[20px] !bg-transparent outline-0 border-0 shadow-none",
      }}
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        emptyContent={"Not found"}
        items={sortedItems}
        loadingContent={<Spinner />}
        isLoading={loading}
      >
        {sortedItems.map((item: any, index: number) => (
          <TableRow key={index}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
