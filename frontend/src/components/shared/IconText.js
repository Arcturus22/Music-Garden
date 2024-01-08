import { Icon } from "@iconify/react";

const IconText = ({ iconName, displayText, active }) => {
  return (
    <div className="flex items-center justify-start">
      <div className="Icon px-5 py-2.5" >
        <Icon icon={iconName}  color="white" fontSize={35}/>
      </div>
      <div className="Text text-white text-sm font-bold">{displayText}</div>
    </div>
  );
};

export default IconText;
