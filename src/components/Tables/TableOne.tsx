import { BRAND } from '../../types/brand';
import BrandOne from '../../images/user/user-01.png';
import BrandTwo from '../../images/user/user-02.png';
import BrandFour from '../../images/user/user-03.png';
import { MdOutlineDelete } from "react-icons/md";

const brandData: BRAND[] = [
  {
    logo: BrandOne,
    name: 'Ronalad Bradley',
    commit: "Initial commit",
    date: "May 6, 2018"
  },
  {
    logo: BrandTwo,
    name: 'Russell Gibson',
    commit: "Main Structure",
    date: "May 6, 2028"
  },

  {
    logo: BrandFour,
    name: 'Bervely Amstrong',
    commit: "Left sidebar adjustments",
    date: "April 15, 2018"
  },
 
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
  
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              USERS
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              COMMIT
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              DATE
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-4 ${
              key === brandData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img className="h-12 w-12 rounded-full" src={brand.logo} alt="Brand" />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.commit}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.date}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
            <MdOutlineDelete className='text-xl text-black dark:text-white' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
