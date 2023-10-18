const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url('./src/assets/home/chef-service.jpg')",
        "featured-bg": "url('./src/assets/home/featured.jpg')",
        "menu-page-bg": "url('./src/assets/menu/banner3.jpg')",
        "login-bg": "url('./src/assets/reservation/wood-grain-pattern-gray1x.png')"
      },
      borderRadius: {
        "img-radius": "0px 200px 200px 200px",
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
  daisyui: {
    themes: ["light"],
  },
});
