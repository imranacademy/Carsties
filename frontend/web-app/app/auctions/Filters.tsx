import { useParamsStore } from "@/hooks/useParamsStore";
import { Button } from "flowbite-react";
import { AiOutlineClockCircle, AiOutlineSortAscending } from "react-icons/ai";
import { BsStopCircleFill, BsStopwatchFill } from "react-icons/bs";
import { GiFinishLine, GiFlame } from "react-icons/gi";

const pageSizeButtons = [4, 8, 12];

const ordersButtons = [
  {
    label: "Alphabetical",
    icon: AiOutlineSortAscending,
    value: "make",
  },
  {
    label: "End date",
    icon: AiOutlineClockCircle,
    value: "endingSoon",
  },
  {
    label: "Rcently added",
    icon: BsStopCircleFill,
    value: "new",
  },
];

const filtersButtons = [
  {
    label: "Live Auctions",
    icon: GiFlame,
    value: "live",
  },
  {
    label: "Ending < 6 hours",
    icon: GiFinishLine,
    value: "endingSoon",
  },
  {
    label: "Completed",
    icon: BsStopwatchFill,
    value: "finished",
  },
];

export default function Filters() {
  const pageSize = useParamsStore((state) => state.pageSize);
  const setParams = useParamsStore((state) => state.setParams);
  const orderBy = useParamsStore((state) => state.orderBy);
  const filterBy = useParamsStore((state) => state.filterBy);

  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Filter By</span>
        <Button.Group>
          {filtersButtons.map(({ label, icon: Icon, value }) => (
            <Button
              key={value}
              onClick={() => setParams({ filterBy: value })}
              color={`${filterBy === value ? "red" : "gray"}`}
            >
              <Icon className="mr-3 h-4 w-4" /> {label}
            </Button>
          ))}
        </Button.Group>
      </div>
      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Order By</span>
        <Button.Group>
          {ordersButtons.map(({ label, icon: Icon, value }) => (
            <Button
              key={value}
              onClick={() => setParams({ orderBy: value })}
              color={`${orderBy === value ? "red" : "gray"}`}
            >
              <Icon className="mr-3 h-4 w-4" /> {label}
            </Button>
          ))}
        </Button.Group>
      </div>
      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Page Size</span>
        <Button.Group>
          {pageSizeButtons.map((value, i) => (
            <Button
              key={i}
              onClick={() => setParams({ pageSize: value })}
              color={`${pageSize === value ? "red" : "gray"}`}
              className="focus:ring-0"
            >
              {value}
            </Button>
          ))}
        </Button.Group>
      </div>
    </div>
  );
}
