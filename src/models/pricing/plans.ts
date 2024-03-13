export interface PlansModel {
  id: string;
  feature: string;
  starter: {
    canHave: boolean;
    feature: string;
  };
  standard: {
    canHave: boolean;
    feature: string;
  };
  premium: {
    canHave: boolean;
    feature: string;
  };
}

export const pricing = {
  monthly: {
    starter: 0,
    standard: 549,
    premium: 849,
  },
  yearly: {
    starter: 0,
    standard: 4990,
    premium: 7990,
  },
};

export const plans: PlansModel[] = [
  {
    id: "1",
    feature: "Course Access",
    starter: {
      canHave: true,
      feature: "Limited selection",
    },
    standard: {
      canHave: true,
      feature: "Unlimited access",
    },
    premium: {
      canHave: true,
      feature: "Unlimited access",
    },
  },
  {
    id: "2",
    feature: "Premium Features",
    starter: {
      canHave: true,
      feature: "Limited access",
    },
    standard: {
      canHave: true,
      feature: "Quizzes, Assignments, Certifications",
    },
    premium: {
      canHave: true,
      feature: "Exclusive Courses, Workshops",
    },
  },
  {
    id: "3",
    feature: "Support",
    starter: {
      canHave: true,
      feature: "Basic community support",
    },
    standard: {
      canHave: true,
      feature: "Priority community support",
    },
    premium: {
      canHave: true,
      feature: "Personalized instructor support, Priority Support",
    },
  },
  {
    id: "4",
    feature: "Updates",
    starter: {
      canHave: true,
      feature: "Limited access",
    },
    standard: {
      canHave: true,
      feature: "Regular updates",
    },
    premium: {
      canHave: true,
      feature: "Early access to updates",
    },
  },
  {
    id: "5",
    feature: "Customer Support",
    starter: {
      canHave: true,
      feature: "Basic support",
    },
    standard: {
      canHave: true,
      feature: "Priority support",
    },
    premium: {
      canHave: true,
      feature: "Dedicated support",
    },
  },
  {
    id: "6",
    feature: "Webinars/Events",
    starter: {
      canHave: false,
      feature: "Not available",
    },
    standard: {
      canHave: true,
      feature: "Access to webinars/events",
    },
    premium: {
      canHave: true,
      feature: "Exclusive webinars/events",
    },
  },
  {
    id: "7",
    feature: "Learning Resources",
    starter: {
      canHave: false,
      feature: "Not available",
    },
    standard: {
      canHave: true,
      feature: "E-books",
    },
    premium: {
      canHave: true,
      feature: "E-books, Supplementary materials",
    },
  },
];
