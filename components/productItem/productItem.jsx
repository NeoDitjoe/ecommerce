import Image from "next/image";
import Link from "next/link";
import style from './productItem.module.css'

export default function ProductItem(props) {

  const { image, name, slug, brand, price } = props.product
  return (
      <div className={style.main}>
        <figure>
          <Link href={`/product/${slug}`}>
            <Image
              src={image}
              alt={name}
              width={300}
              height={300}
              className={style.img}
            />
          </Link>
        </figure>

        <div>
          <Link href={`/product/${slug}`}>
            {name}
          </Link>
          <p>{brand}</p>
          <div>
            <h2>R{price}</h2>
          </div>
        </div>
      </div>
  )
}

//small screen

// import React from "react";
// import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

// export default function App() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const menuItems = [
//     "Profile",
//     "Dashboard",
//     "Activity",
//     "Analytics",
//     "System",
//     "Deployments",
//     "My Settings",
//     "Team Settings",
//     "Help & Feedback",
//     "Log Out",
//   ];

//   return (
//     <Navbar
//       isBordered
//       isMenuOpen={isMenuOpen}
//       onMenuOpenChange={setIsMenuOpen}
//     >
//       <NavbarContent className="sm:hidden" justify="start">
//         <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
//       </NavbarContent>

//       <NavbarContent className="sm:hidden pr-3" justify="center">
//         <NavbarBrand>
//           <AcmeLogo />
//           <p className="font-bold text-inherit">ACME</p>
//         </NavbarBrand>
//       </NavbarContent>

//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarBrand>
//           <AcmeLogo />
//           <p className="font-bold text-inherit">ACME</p>
//         </NavbarBrand>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Features
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link href="#" aria-current="page">
//             Customers
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#">Login</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="warning" href="#" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarMenu>
//         {menuItems.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Link
//               className="w-full"
//               color={
//                 index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
//               }
//               href="#"
//               size="lg"
//             >
//               {item}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>
//     </Navbar>
//   );
// }



//desktop


// import React from "react";
// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
// import {SearchIcon} from "./SearchIcon.jsx";

// export default function App() {
//   return (
//     <Navbar isBordered>
//       <NavbarContent justify="start">
//         <NavbarBrand className="mr-4">
//           <AcmeLogo />
//           <p className="hidden sm:block font-bold text-inherit">ACME</p>
//         </NavbarBrand>
//         <NavbarContent className="hidden sm:flex gap-3">
//           <NavbarItem>
//             <Link color="foreground" href="#">
//               Features
//             </Link>
//           </NavbarItem>
//           <NavbarItem isActive>
//             <Link href="#" aria-current="page" color="secondary">
//               Customers
//             </Link>
//           </NavbarItem>
//           <NavbarItem>
//             <Link color="foreground" href="#">
//               Integrations
//             </Link>
//           </NavbarItem>
//         </NavbarContent>
//       </NavbarContent>

//       <NavbarContent as="div" className="items-center" justify="end">
//         <Input
//           classNames={{
//             base: "max-w-full sm:max-w-[10rem] h-10",
//             mainWrapper: "h-full",
//             input: "text-small",
//             inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
//           }}
//           placeholder="Type to search..."
//           size="sm"
//           startContent={<SearchIcon size={18} />}
//           type="search"
//         />
//         <Dropdown placement="bottom-end">
//           <DropdownTrigger>
//             <Avatar
//               isBordered
//               as="button"
//               className="transition-transform"
//               color="secondary"
//               name="Jason Hughes"
//               size="sm"
//               src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
//             />
//           </DropdownTrigger>
//           <DropdownMenu aria-label="Profile Actions" variant="flat">
//             <DropdownItem key="profile" className="h-14 gap-2">
//               <p className="font-semibold">Signed in as</p>
//               <p className="font-semibold">zoey@example.com</p>
//             </DropdownItem>
//             <DropdownItem key="settings">My Settings</DropdownItem>
//             <DropdownItem key="team_settings">Team Settings</DropdownItem>
//             <DropdownItem key="analytics">Analytics</DropdownItem>
//             <DropdownItem key="system">System</DropdownItem>
//             <DropdownItem key="configurations">Configurations</DropdownItem>
//             <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
//             <DropdownItem key="logout" color="danger">
//               Log Out
//             </DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//       </NavbarContent>
//     </Navbar>
//   );
// }


//shaded box
{/* <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
      <Textarea
        label="Description"
        placeholder="Enter your description (Default autosize)"
      /> </div> */}

//buttons
{/* <div className="flex flex-wrap gap-4 items-center">
<Button color="primary" variant="solid">
  Solid
</Button>
<Button color="primary" variant="faded">
  Faded
</Button>  
<Button color="primary" variant="bordered">
  Bordered
</Button>  
<Button color="primary" variant="light">
  Light
</Button>  
<Button color="primary" variant="flat">
  Flat
</Button>  
<Button color="primary" variant="ghost">
  Ghost
</Button>  
<Button color="primary" variant="shadow">
  Shadow
</Button>  
</div> */}


//add too mui nav
{/* <Box sx={{ flexGrow: 0 }}>
<Tooltip title="Open settings">
  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
  </IconButton>
</Tooltip>
<Menu
  sx={{ mt: '45px' }}
  id="menu-appbar"
  anchorEl={anchorElUser}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  open={Boolean(anchorElUser)}
  onClose={handleCloseUserMenu}
>
  {settings.map((setting) => (
    <MenuItem key={setting} onClick={handleCloseUserMenu}>
      <Typography textAlign="center">{setting}</Typography>
    </MenuItem>
  ))}
</Menu>
</Box> */}


