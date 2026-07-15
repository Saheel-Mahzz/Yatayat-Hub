import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Lock, Mail, Phone } from "lucide-react";
import ProfileSecurity from "./components/profileSecurity";
import { getProfile } from "./api/getProfile";
import CreateButton from "@/components/createButton";
import ProfileUpdateModal from "./components/editProfileModel";

interface User {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
}

const user: User = {
  first_name: "Saheel",
  last_name: "Mahazz",
  phone_number: "+977 9800000000",
  email: "saheel@example.com",
};

export default async function Profile() {
  const response = await getProfile();
  const user = response?.data?.user;

  return (
    <div className="min-h-screen bg-muted/40 p-6">
      <div className="mx-auto max-w-5xl space-y-6">
        {/* Profile Header */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-6">
            <div className="flex items-center gap-5">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="text-xl font-semibold">
                  {user.first_name[0]}
                  {user.last_name[0]}
                </AvatarFallback>
              </Avatar>

              <div>
                <h1 className="text-2xl font-semibold">
                  {user.first_name} {user.last_name}
                </h1>

                <p className="text-sm text-muted-foreground">User Profile</p>
              </div>
            </div>

            {/* <EditProfileButton />
             */}
            <CreateButton
              addButtonText="Edit Profile"
              modelTitle="Edit Profile"
              withIcon={false}
              variant="outline"
            >
              <ProfileUpdateModal />
            </CreateButton>
          </CardContent>
        </Card>

        {/* Personal Information */}

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="grid grid-cols-2 gap-6">
              {/* First Name */}
              <ProfileItem label="First Name" value={user.first_name} />

              {/* Last Name */}
              <ProfileItem label="Last Name" value={user.last_name} />
            </div>

            <Separator />

            {/* Email */}

            <ProfileItem
              label="Email Address"
              value={user.email ?? ""}
              icon={<Mail className="h-4 w-4" />}
              locked
            />

            {/* Phone */}

            <ProfileItem
              label="Phone Number"
              value={user.phone_number ?? ""}
              icon={<Phone className="h-4 w-4" />}
              locked
            />
          </CardContent>
        </Card>

        {/* Security */}

        <ProfileSecurity />
      </div>
    </div>
  );
}

function ProfileItem({
  label,
  value,
  icon,
  locked,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
  locked?: boolean;
}) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        {icon}

        <span>{label}</span>

        {locked && <Lock className="h-3.5 w-3.5" />}
      </div>

      <p className="font-medium">{value}</p>
    </div>
  );
}
