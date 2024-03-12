import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Profile: React.FC<any> = () => {
  return (
    <div>
      <Link href="/login">
        <Button variant={"outlineSecondary"} size={"md"}>
          Login
        </Button>
      </Link>
    </div>
  );
};
