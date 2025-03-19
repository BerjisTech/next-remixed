import Image from "next/image";
import Link from "next/link";

const EmployeeListCard = () => {
  const teamMembers = [
    {
      employee_id: 1,
      name: "Gustavo Posati",
      title: "Resource Manager",
      imageUrl: "https://via.placeholder.com/65x65",
    },
    {
      employee_id: 1,
      name: "Jan Sundström",
      title: "Senior Technical Project Manager",
      imageUrl: "https://via.placeholder.com/65x65",
    },
    {
      employee_id: 7,
      name: "Jan Sundström",
      title: "Senior Technical Project Manager",
      imageUrl: "https://via.placeholder.com/65x65",
    },
    {
      employee_id: 5,
      name: "Jan Sundström",
      title: "Senior Technical Project Manager",
      imageUrl: "https://via.placeholder.com/65x65",
    },
    {
      employee_id: 3,
      name: "Jan Sundström",
      title: "Senior Technical Project Manager",
      imageUrl: "https://via.placeholder.com/65x65",
    },
  ];

  return (
    <>
      {teamMembers.map((employee, index) => (
        <div
          key={index}
          className="w-full self-stretch basis-[49%] justify-start items-start gap-4 inline-flex"
        >
          <Link
            href={`/employee/${employee.employee_id}`}
            className="grow shrink basis-0 p-3 bg-[#fbfafa] rounded-2xl border border-[#f2f4f7] flex-col justify-start items-start gap-3 inline-flex"
          >
            <div className="self-stretch h-16 flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="w-16 h-16 justify-center items-center flex">
                  <div className="w-16 h-16 relative bg-white rounded-xl border border-[#88bdbd] flex-col justify-start items-start flex">
                    <Image
                      src={employee.imageUrl}
                      alt={employee.name}
                      width={65}
                      height={65}
                      className="w-[64.76px] h-[64.76px] rounded-xl"
                    />
                  </div>
                </div>
                <div className="h-[43px] justify-start items-end gap-14 flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-px inline-flex">
                    <div className="w-max text-[#344054] text-base font-semibold leading-normal">
                      {employee.name}
                    </div>
                    <div className="text-[#667085] text-xs font-medium leading-[18px]">
                      {employee.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
export default EmployeeListCard;
