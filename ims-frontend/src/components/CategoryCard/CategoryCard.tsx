interface CategoryCardProps {
    name: string;
    image: string;
    onClick?: () => void;
  }
  
  const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, onClick }) => (
    <div
      className="category-card bg-white border border-black rounded-lg shadow hover:shadow-lg transition cursor-pointer"
      onClick={onClick}
    >
      {/* Aspect ratio forces square */}
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      </div>
    </div>
  );
  
  export default CategoryCard;
  