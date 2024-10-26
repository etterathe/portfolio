import Image from "next/image";

const Skill = ({
  cardInfo,
}: {
  cardInfo: {
    name: string;
    description: string;
    imageUrl: string;
    bgColor: string;
  };
}) => {
  const { name, description, imageUrl, bgColor } = cardInfo;
  return (
    <div className="w-50 h-30 flex flex-1 items-center gap-6 p-6 rounded-xl border border-black/5 bg-gray-100 hover:bg-gray-200 hover:border-[#E0E0E0] transition-colors duration-200">
      <div className={`p-3 ${bgColor} rounded-lg shrink-0`}>
        <Image
          src={imageUrl}
          width={1000}
          height={1000}
          alt={`${name} logo`}
          quality={90}
          className="size-8"
        />
      </div>
      <div className="flex-1 text-left mb-2 mr-6">
        <h4 className="text-lg font-medium">{name}</h4>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Skill;
