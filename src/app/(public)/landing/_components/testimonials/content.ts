import { SectionProps } from "../../content";

export interface TestimonialSectionProps extends SectionProps {}

export interface TestimonialCardProps {
  id: string;
  studentName: string;
  review: string;
  stars: number;
  avatar: string;
}

export const testimonialContent: TestimonialSectionProps = {
  title: "Discover What Our Users Are Saying",
  description:
    "Here are some of the reviews from our students who have experienced our courses.",
};

const testimonialReviews: TestimonialCardProps[] = [
  {
    id: "1",
    studentName: "John Hendry",
    review:
      "Exceptional mentorship! Dr. Emily Johnson's guidance has been instrumental in helping me navigate my career path. Her expertise in personal development and career coaching has empowered me to achieve my goals with confidence.",
    stars: 5,
    avatar: "https://source.unsplash.com/300x200/?avatar",
  },
  {
    id: "2",
    studentName: "Jane Doe",
    review:
      "I've had an amazing experience learning from the best instructors. The courses are well-structured and the content is engaging. I highly recommend this platform to anyone looking to expand their knowledge and skills.",
    stars: 5,
    avatar: "https://source.unsplash.com/300x200/?avatar",
  },
  {
    id: "3",
    studentName: "Alex Smith",
    review:
      "I've been a part of this community for a while now and I can confidently say that it's been a life-changing experience. The support and encouragement from the instructors and fellow students have made a huge difference in my learning journey.",
    stars: 5,
    avatar: "https://source.unsplash.com/300x200/?avatar",
  },
  {
    id: "4",
    studentName: "Eva Johnson",
    review:
      "I've been able to enhance my skills and knowledge in a short period of time. The instructors are very knowledgeable and the course content is top-notch. I'm grateful for the opportunity to be a part of this community.",
    stars: 5,
    avatar: "https://source.unsplash.com/300x200/?avatar",
  },
];
