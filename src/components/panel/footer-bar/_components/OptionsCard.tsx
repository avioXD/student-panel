import { FooterSectionProps } from "../content";

interface Props {
  data: FooterSectionProps;
}

export const FooterOptionsCard: React.FC<Props> = ({
  data: { title, options },
}) => {
  return (
    <div className=" text-white">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="flex flex-col gap-2 ">
        {options.map((option) => (
          <li key={option.id} className="text-sm mb-1">
            <a href={option.link} target="_blank" rel="noopener noreferrer">
              {option.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
