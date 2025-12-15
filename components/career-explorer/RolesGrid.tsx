import RoleCard from "./RoleCard";

interface Role {
  title: string;
  level: string;
  matchScore?: number;
}

export default function RolesGrid({ roles }: { roles: Role[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {roles.map((role, i) => (
        <RoleCard key={i} {...role} />
      ))}
    </div>
  );
}
