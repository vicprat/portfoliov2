'use client'
import Link from "next/link"
import { motion } from "framer-motion"
import { socialLinkVariants } from "../utils/animations"

// Define el tipo para IconType
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

// Define la interfaz para las props del componente
interface SocialLinkProps {
  className?: string;
  href: string;
  "aria-label": string;
  icon: IconType;
}
// Define la interfaz para las props del componente
interface SocialLinksProps {
  links: SocialLinkProps[];
}
export function SocialLink({ icon: Icon, ...props }: SocialLinkProps) {
  return (
    <Link className="p-1 -m-1 group" {...props}>
      <Icon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <>
      {links.map((link, index) => (
        <motion.div variants={socialLinkVariants} key={index}>
          <SocialLink  {...link} />
        </motion.div>
      ))}
    </>
  );
}

// function SocialLink({ className, href, children, icon: Icon }) {
//     return (
//         <li className={clsx(className, 'flex')}>
//             <Link
//                 href={href}
//                 className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
//             >
//                 <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
//                 <span className="ml-4">{children}</span>
//             </Link>
//         </li>
//     )
// }