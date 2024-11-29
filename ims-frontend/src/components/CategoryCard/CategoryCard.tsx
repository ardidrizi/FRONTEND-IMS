interface CategoryCardProps {
    name: string;
    image?: string; // Make the image prop optional
    onClick?: () => void;
  }
  
  const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, onClick }) => {
    const placeholderImage = '/assets/images/categories/placeholder.jpg'; // Path to placeholder image
  
    return (
      <div
        className="category-card bg-white border border-gray-300 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
        onClick={onClick}
      >
        {/* Fixed square aspect ratio */}
        <div className="aspect-w-1 aspect-h-1 w-full h-full">
          <img
            src={image || placeholderImage} // Use placeholder if image is not provided
            alt={name}
            className="object-cover w-full h-full rounded-t-lg"
          />
        </div>
        <div className="p-4 text-center">
          <h2 className="text-base font-semibold text-gray-800">{name}</h2>
        </div>
      </div>
    );
  };
  
  export default CategoryCard;
  
  
  