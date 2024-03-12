import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QuestionProps } from "../content";

interface Props {
  data: QuestionProps;
}

export const QNACard: React.FC<Props> = ({
  data: { question, answer, id },
}) => {
  return (
    <AccordionItem value={id.toString()}>
      <AccordionTrigger>
        <h2 className="text-xl font-semibold text-start">
          0{id}. {question}
        </h2>
      </AccordionTrigger>
      <AccordionContent>
        <p className="text-subtitle">{answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
};
