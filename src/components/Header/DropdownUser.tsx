import { useState } from 'react';
import { Link } from 'react-router-dom';
import ClickOutside from '../ClickOutside';
import { Avatar } from '@nextui-org/react';

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex flex-row items-center gap-1"
        to="#"
      >
        <span className="h-12 w-12 rounded-full">
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        </span>

        <span className="hidden text-left lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Jane Pearson
          </span>
          <span className="block text-xs">Administrator</span>
        </span>
      </Link>

    </ClickOutside>
  );
};

export default DropdownUser;
