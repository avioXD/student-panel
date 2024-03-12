import { SectionProps } from "@/models/global_props/props";

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

export const testimonialReviews: TestimonialCardProps[] = [
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
  {
    id: "5",
    studentName: "Michael Brown",
    review:
      "I'm impressed with the quality of the courses offered on this platform. The instructors are knowledgeable and the content is up-to-date. I've gained valuable skills that have helped me in my career.",
    stars: 4,
    avatar: "https://source.unsplash.com/300x200/?avatar",
  },
  {
    id: "6",
    studentName: "Sarah Wilson",
    review:
      "The courses provided by this platform have exceeded my expectations. The instructors are passionate and the course material is comprehensive. I would highly recommend this platform to anyone looking to enhance their skills.",
    stars: 4,
    avatar: "https://source.unsplash.com/300x200/?avatar",
  },
  {
    id: "7",
    studentName: "David Thompson",
    review:
      "I've been able to learn at my own pace and the flexibility of the courses has been great. The instructors are responsive and provide valuable feedback. I'm grateful for the opportunity to learn from such experienced professionals.",
    stars: 4,
    avatar: "https://source.unsplash.com/300x200/?avatar",
  },
  {
    id: "8",
    studentName: "Emily Davis",
    review:
      "The courses offered on this platform are well-structured and easy to follow. The instructors explain complex concepts in a simple and understandable way. I'm glad I found this platform to further my education.",
    stars: 4,
    avatar: "https://source.unsplash.com/300x200/?avatar",
  },
  {
    id: "9",
    studentName: "Daniel Wilson",
    review:
      "I've been able to apply the knowledge gained from the courses to real-world projects. The practical exercises and assignments have been invaluable in solidifying my understanding. I highly recommend this platform to anyone serious about learning.",
    stars: 5,
    avatar: "https://source.unsplash.com/300x200/?avatar",
  },
  {
    id: "10",
    studentName: "Olivia Johnson",
    review:
      "The community aspect of this platform is amazing. The forums and discussions allow for collaboration and knowledge sharing. I've made connections with like-minded individuals who have helped me grow both personally and professionally.",
    stars: 5,
    avatar: "https://source.unsplash.com/300x200/?avatar",
  },
  {
    id: "11",
    studentName: "Matthew Thompson",
    review:
      "The courses on this platform have given me a competitive edge in my field. The instructors provide practical insights and industry best practices. I'm grateful for the opportunity to learn from experts in the field.",
    stars: 5,
    avatar: "https://source.unsplash.com/300x200/?avatar",
  },
  {
    id: "12",
    studentName: "Sophia Davis",
    review:
      "I've been able to upskill and stay relevant in a rapidly changing industry. The courses cover the latest technologies and trends. I would highly recommend this platform to anyone looking to stay ahead in their career.",
    stars: 4,
    avatar: "https://source.unsplash.com/300x200/?avatar",
  },
  {
    id: "13",
    studentName: "James Wilson",
    review:
      "The instructors on this platform are passionate about teaching and it shows in their courses. The content is engaging and the exercises are challenging. I'm grateful for the opportunity to learn from industry experts.",
    stars: 5,
    avatar: "https://source.unsplash.com/300x200/?avatar",
  },
  {
    id: "14",
    studentName: "Emma Johnson",
    review:
      "The courses have helped me gain confidence in my abilities. The practical projects have allowed me to apply what I've learned in a real-world setting. I'm excited to continue my learning journey on this platform.",
    stars: 4,
    avatar: "https://source.unsplash.com/300x200/?avatar",
  },
];
