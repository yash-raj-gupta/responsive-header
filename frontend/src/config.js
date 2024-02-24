//File to modify the contents of the header from one place


//Just add new items or change the existing ones to make the header look like you want

const Headerconfig = {
    title: "Name",
    navItems:  [
        { to: '/', text: 'Home' },
        { to: '/category', text: 'Category' },
        { to: '/contact', text: 'Contact Us' },
        { to: '/about', text: 'About Us' },
        
      ],
    buttons: [
        { to: '/login', text: 'Log In' },
        { to: '/register', text: 'Sign Up' },
    ],
};

export {Headerconfig};