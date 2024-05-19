import { ClientsColums } from "./Column";
import Clients from "./Clients";
import { Client } from "@/types/Client";

export const clients: Client[] = [
  {
    Name: "John Doe",
    Address: "123 Main St, Springfield, IL 62704",
    Phone: "(217) 555-1234",
    Note: "Preferred contact time: morning",
  },
  {
    Name: "Jane Smith",
    Address: "456 Elm St, Shelbyville, IL 62565",
    Phone: "(217) 555-5678",
    Note: "Requires follow-up on previous order",
  },
  {
    Name: "Michael Johnson",
    Address: "789 Oak St, Capital City, IL 62712",
    Phone: "(217) 555-8765",
    Note: "VIP client",
  },
  {
    Name: "Emily Davis",
    Address: "101 Maple St, Ogdenville, IL 62655",
    Phone: "(217) 555-3456",
    Note: "Interested in new products",
  },
  {
    Name: "Christopher Wilson",
    Address: "202 Pine St, North Haverbrook, IL 62567",
    Phone: "(217) 555-6543",
    Note: "Has a pending payment",
  },
  {
    Name: "Sarah Brown",
    Address: "303 Cedar St, Springfield, IL 62704",
    Phone: "(217) 555-7890",
    Note: "Requested a brochure",
  },
  {
    Name: "David Anderson",
    Address: "404 Birch St, Shelbyville, IL 62565",
    Phone: "(217) 555-2345",
    Note: "New client, needs onboarding",
  },
  {
    Name: "Laura Martinez",
    Address: "505 Walnut St, Capital City, IL 62712",
    Phone: "(217) 555-6789",
    Note: "Attended recent event",
  },
  {
    Name: "James Taylor",
    Address: "606 Chestnut St, Ogdenville, IL 62655",
    Phone: "(217) 555-3457",
    Note: "Follow-up call needed",
  },
  {
    Name: "Patricia Thomas",
    Address: "707 Hickory St, North Haverbrook, IL 62567",
    Phone: "(217) 555-4567",
    Note: "Interested in bulk purchase",
  },
  {
    Name: "Robert Harris",
    Address: "808 Poplar St, Springfield, IL 62704",
    Phone: "(217) 555-5678",
    Note: "Special discount applied",
  },
  {
    Name: "Linda Clark",
    Address: "909 Redwood St, Shelbyville, IL 62565",
    Phone: "(217) 555-6780",
    Note: "Requested product demo",
  },
  {
    Name: "Barbara Lewis",
    Address: "1010 Fir St, Capital City, IL 62712",
    Phone: "(217) 555-7891",
    Note: "Follow-up meeting scheduled",
  },
  {
    Name: "Steven Robinson",
    Address: "1111 Spruce St, Ogdenville, IL 62655",
    Phone: "(217) 555-8901",
    Note: "Referral from another client",
  },
  {
    Name: "Mary Walker",
    Address: "1212 Sycamore St, North Haverbrook, IL 62567",
    Phone: "(217) 555-9012",
    Note: "Requested quote for services",
  },
];

function PageClients() {
  return (
    <div className="px-1 md:container md:py-10 mx-auto">
      <Clients columns={ClientsColums} data={clients} />
    </div>
  );
}

export default PageClients;
