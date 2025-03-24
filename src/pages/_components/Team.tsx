import leve1 from "../../assets/leve1.png"; 
import leve2 from "../../assets/leve2.png"; 

interface LeveProps {
    name: string;
    position: string;
    imageUrl: string;
  }
  
  const Leve = ({ name, position, imageUrl }: LeveProps) => {
    return (
      <div className="bg-white border border-gray-200 shadow-lg rounded-2xl overflow-hidden">
        <img src={imageUrl} alt={name} className="h-60 w-full object-cover" />
        <div className="p-7 text-left">
          <h3 className="font-bold text-2xl mb-1" style={{ color: '#704EE7' }}>{name}</h3>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    );
  };
  
  export function Team() {
    const members: LeveProps[] = [
      {
        name: "Ms. Trang Phan",
        position: "Founder & CEO CVCEC",
        imageUrl: leve1,
      },
      {
        name: "Mr. Huh Dam",
        position: "Founder & CEO Stick'Em",
        imageUrl: leve2,
      },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-4">
        {members.map((member, index) => (
          <Leve key={index} {...member} />
        ))}
      </div>
    );
  }
  