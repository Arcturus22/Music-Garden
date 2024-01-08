import { Icon } from "@iconify/react";

const IconText = ({ iconName, displayText, active }) => {
  return (
    <div className="flex items-center justify-start cursor-pointer">
      <div className="Icon px-5 py-2.5">
        <Icon 
          icon={iconName} 
          color={active ? "white" : "gray"} 
          fontSize={25} />
      </div>
      <div
        className={`${
          active ? "text-white" : "text-gray-400"
        } text-sm font-bold hover:text-white`}
      >
        {displayText}
      </div>
    </div>
  );
};

export default IconText;
