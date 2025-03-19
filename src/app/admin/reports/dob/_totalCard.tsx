interface TotalCardProps {
  title: string;
  total: number;
}
const TotalCard: React.FC<TotalCardProps> = ({ title, total }) => (
  <div className="p-4 bg-white shadow rounded">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-3xl">{total}</p>
  </div>
);
export default TotalCard;
