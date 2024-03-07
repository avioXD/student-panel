import { SectionProps } from "../../content";

export interface QNASectionProps extends SectionProps {}

export interface QuestionProps {
  id: number;
  question: string;
  answer: string;
}

export const qnaContent: QNASectionProps = {
  title: "Questions And Answers",
  description:
    "Have a question? We have answers! Check out our FAQ section to find the answers to the most common questions. If you can't find what you're looking for, feel free to contact us directly.",
};

export const questions: QuestionProps[] = [
  {
    id: 1,
    question: "How do I sign up for a course?",
    answer:
      "To sign up for a course, you can visit our website and navigate to the course page. From there, you will find an option to enroll in the course by providing your details and completing the registration process.",
  },
  {
    id: 2,
    question: "How do I make a payment for a course?",
    answer:
      "To make a payment for a course, you can choose from the available payment methods on our website. Once you select a payment method, follow the instructions to complete the payment securely.",
  },
  {
    id: 3,
    question: "What is the refund policy for courses?",
    answer:
      "Our refund policy for courses allows you to request a refund within a specified period of time after enrollment. Please refer to our refund policy page on our website for more details on the eligibility criteria and refund process.",
  },
  {
    id: 4,
    question: "How can I get a certificate for course completion?",
    answer:
      "Upon successful completion of a course, you will be eligible to receive a certificate. The certificate can be downloaded from your account dashboard on our website. Instructions on how to download the certificate will be provided upon course completion.",
  },
  {
    id: 5,
    question: "How can I access the course materials?",
    answer:
      "Once you have enrolled in a course, you will have access to the course materials through our online learning platform. Simply log in to your account and navigate to the course page to access the materials.",
  },
  {
    id: 6,
    question: "Can I access the course materials offline?",
    answer:
      "Our course materials are primarily designed for online access. However, some courses may offer downloadable resources that can be accessed offline. Please check the course details or contact our support team for more information.",
  },
];
